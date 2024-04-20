import { El } from "@/utils";
import { Header } from "@/layout/header";
import { Link } from "@/components/link";
import { addressElement } from "@/components/shipping-addresses/addressElement";
import { shippingElement } from "@/components/choose-shipping/shippingElement";
import { getUser } from "@/library/api/users";
import { renderCartItem } from "@/components/cart/renderCartItem";

export const Checkout = () => {
  const CheckoutPageHeader = Header("Checkout");
  CheckoutPageHeader.append(
    El({
      element: "img",
      className: "w-6",
      src: "./src/assets/img/more.svg",
    })
  );

  const template = (title, el) => {
    return El({
      element: "div",
      className: "mb-6 border-b",
      children: [
        El({
          element: "h1",
          className: "text-lg font-bold",
          innerText: title,
        }),
        El({
          element: "div",
          className: "py-6",
          children: [el],
        }),
      ],
    });
  };

  const ShippingAddressElem = El({
    element: "div",
    className: "flex justify-between items-center",
  });
  getUser(1).then((res) => {
    res.addresses.forEach((address) => {
      if (address.chosen) {
        ShippingAddressElem.append(addressElement(address, false));
        ShippingAddressElem.append(
          Link({
            href: "/shipping-address",
            element: "img",
            className: "w-6 h-6 cursor-pointer",
            src: "./src/assets/img/edit.jpg",
          })
        );
      }
    });
  });
  const ShippingAddress = template("Shipping Address", ShippingAddressElem);

  const OrderListElem = El({
    element: "div",
  });
  getUser(1).then((res) => {
    res.cart.forEach((cartItem) => {
      const orderElem = renderCartItem(cartItem);
      orderElem.querySelector(".delete-icon").classList.add("hidden");
      orderElem.querySelectorAll("button").forEach((button) => {
        button.classList.add("hidden");
      });
      orderElem
        .querySelector(`#quantity-${orderElem.id}`)
        .classList.add(
          "w-6",
          "h-6",
          "flex",
          "justify-center",
          "items-center",
          "px-5",
          "rounded-full"
        );
      OrderListElem.append(orderElem);
    });
  });
  const OrderList = template("Order List", OrderListElem);

  const ChooseShippingElem = El({
    element: "div",
    className: "flex justify-between items-center",
  });
  const editChooseShipping = Link({
    href: "/choose-shipping",
    element: "img",
    className: "w-6 h-6 cursor-pointer",
    src: "./src/assets/img/edit.jpg",
  });
  const goToChooseShipping = Link({
    href: "/choose-shipping",
    element: "span",
    className: "icon-[ep--arrow-right] cursor-pointer text-xl",
  });
  const ChooseShippingDafault = El({
    element: "div",
    className: "flex-grow flex justify-between items-center",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-3",
        children: [
          El({
            element: "img",
            className: "w-6",
            src: "./src/assets/img/shipping/shipping.jpg",
          }),
          El({
            element: "p",
            className: "font-bold",
            innerText: "Choose Shipping Type",
          }),
        ],
      }),
      goToChooseShipping,
    ],
  });
  getUser(1).then((res) => {
    console.log(res.shipping);
    let defaultFlag = true;
    res.shipping.forEach((shipping) => {
      if (shipping.chosen) {
        ChooseShippingElem.append(shippingElement(shipping));
        ChooseShippingElem.append(editChooseShipping);
        defaultFlag = false;
      }
    });
    if (defaultFlag) {
      ChooseShippingElem.append(ChooseShippingDafault);
    }
  });
  const ChooseShipping = template("Choose Shipping", ChooseShippingElem);

  const PromoCodeElem = El({
    element: "div",
    className: "flex flex-col",
    children: [
      El({
        element: "div",
        className: "flex justify-between",
        children: [
          El({
            element: "form",
            className: "flex justify-between items-center w-378 gap-8 mb-6",
            children: [
              El({
                element: "input",
                id: "promoCodeInput",
                name: "promoCode",
                className: "flex-grow bg-slate-100 p-4 rounded-2xl",
                placeholder: "Enter Promo Code",
              }),
              El({
                element: "div",
                id: "promoCodeSuccess",
                className:
                  "flex items-center gap-2 bg-black text-white px-8 py-3 rounded-4xl hidden",
                innerText: "Discount 30% Off",
                children: [
                  El({
                    element: "span",
                    className:
                      "icon-[ep--close-bold] text-white text-sm cursor-pointer",
                    eventListener: [
                      {
                        event: "click",
                        callback: () => {
                          const promoDiv = document.getElementById("promoDiv");
                          promoDiv.classList.add("hidden");
                          const promoCodeInput =
                            document.getElementById("promoCodeInput");
                          promoCodeInput.classList.remove("hidden");
                          const promoCodeSuccess =
                            document.getElementById("promoCodeSuccess");
                          promoCodeSuccess.classList.add("hidden");
                          calculateTotal();
                        },
                      },
                    ],
                  }),
                ],
              }),
              El({
                element: "button",
                type: "submit",
                className:
                  "w-10 h-10 bg-black rounded-full flex justify-center items-center",
                children: [
                  El({
                    element: "img",
                    className: "w-4 ",
                    src: "./src/assets/img/plus.jpg",
                  }),
                ],
              }),
            ],
            eventListener: [
              {
                event: "submit",
                callback: (e) => promo(e),
              },
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "p-6 rounded-2xl shadow-top-bottom",
        children: [
          El({
            element: "div",
            className: "border-b mb-4",
            children: [
              El({
                element: "div",
                className: "flex justify-between pb-4",
                children: [
                  El({
                    element: "p",
                    className: "text-gray-500 text-sm",
                    innerText: "Amount",
                  }),
                  El({
                    element: "span",
                    id: "amount",
                    className: "text-slate-600 font-bold",
                    innerText: calculateAmount(),
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex justify-between pb-4",
                children: [
                  El({
                    element: "p",
                    className: "text-gray-500 text-sm",
                    innerText: "Shipping",
                  }),
                  El({
                    element: "span",
                    id: "shipping",
                    className: "text-slate-600 font-bold",
                    innerText: calculateShipping(),
                  }),
                ],
              }),
              El({
                element: "div",
                id: "promoDiv",
                className: "flex justify-between pb-4 hidden",
                children: [
                  El({
                    element: "p",
                    className: "text-gray-500 text-sm",
                    innerText: "Promo",
                  }),
                  El({
                    element: "span",
                    id: "promo",
                    className: "text-slate-600 font-bold",
                    innerText: "-",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between",
            children: [
              El({
                element: "p",
                className: "text-gray-500 text-sm",
                innerText: "Total",
              }),
              El({
                element: "span",
                id: "total",
                className: "text-slate-600 font-bold",
                innerText: calculateTotal(),
              }),
            ],
          }),
        ],
      }),
    ],
  });
  const PromoCode = template("Promo Code", PromoCodeElem);

  const ToPayment = Link({
    href: "/payment",
    element: "div",
    className:
      "w-428 h-28 fixed bottom-0 left-0 border rounded-t-6xl bg-white flex items-center justify-center",
    children: [
      El({
        element: "button",
        type: "submit",
        className:
          "w-378 text-center bg-black text-white font-bold px-6 py-4 rounded-full shadow-lg cursor-pointer",
        children: [
          El({
            element: "div",
            className: "flex justify-center items-center gap-4",
            children: [
              El({
                element: "p",
                innerText: "Continue to Payment",
              }),
              El({
                element: "img",
                className: "w-5",
                src: "src/assets/img/right-white.svg",
              }),
            ],
          }),
        ],
      }),
    ],
  });

  const CheckoutPageBody = El({
    element: "div",
    className: "flex flex-col mt-16 pb-20",
    children: [
      ShippingAddress,
      OrderList,
      ChooseShipping,
      PromoCode,
      ToPayment,
    ],
  });

  return El({
    element: "div",
    children: [CheckoutPageHeader, CheckoutPageBody],
  });
};

function calculateAmount() {
  getUser(1).then((res) => {
    const amountSpan = document.getElementById("amount");
    let amount = 0;
    res.cart.forEach((cartItem) => {
      amount = amount + cartItem.price * cartItem.chosenQuantity;
    });
    amountSpan.innerText = "$ " + amount + ".00";
  });
}

function calculateShipping() {
  getUser(1).then((res) => {
    const shippingSpan = document.getElementById("shipping");
    let defaultFlag = true;
    res.shipping.forEach((shippingOption) => {
      if (shippingOption.chosen) {
        shippingSpan.innerText = "$ " + shippingOption.price + ".00";
        defaultFlag = false;
      }
    });
    if (defaultFlag) {
      shippingSpan.innerText = "-";
    }
  });
}

function calculateTotal() {
  getUser(1).then((res) => {
    const amountSpan = document.getElementById("amount");
    const amountValue = Number(
      amountSpan.innerText.replace("$", "").trim().split(".")[0]
    );

    const shippingSpan = document.getElementById("shipping");
    const shippingValue =
      Number(shippingSpan.innerText.replace("$", "").trim().split(".")[0]) || 0;

    const promoDiv = document.getElementById("promoDiv");
    const promoSpan = document.getElementById("promo");
    let promoValue = 0;
    if (!promoDiv.classList.contains("hidden")) {
      promoValue = Number(
        promoSpan.innerText
          .replace("$", "")
          .replace("-", "")
          .trim()
          .split(".")[0]
      );
    }

    const totalValue = amountValue + shippingValue - promoValue;

    const totalSpan = document.getElementById("total");
    totalSpan.innerText = "$ " + totalValue + ".00";
  });
}

function promo(e) {
  e.preventDefault();
  const { promoCode } = e.target;
  getUser(1).then((res) => {
    if (res.promo === promoCode.value) {
      const amountSpan = document.getElementById("amount");
      const amountValue = Number(
        amountSpan.innerText.replace("$", "").trim().split(".")[0]
      );
      const discountPercentage = Number(res.promo.split("-")[1]) / 100;
      const promoValue = amountValue * discountPercentage;
      const promoSpan = document.getElementById("promo");
      promoSpan.innerText = "- $ " + promoValue + ".00";
      const promoDiv = document.getElementById("promoDiv");
      promoDiv.classList.remove("hidden");
      const promoCodeInput = document.getElementById("promoCodeInput");
      promoCodeInput.classList.add("hidden");
      const promoCodeSuccess = document.getElementById("promoCodeSuccess");
      promoCodeSuccess.classList.remove("hidden");
      calculateTotal();
    } else {
      console.log("Your promo code is not valid.");
    }
  });
}
