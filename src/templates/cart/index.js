import { El } from "@/utils";
import { getUser } from "@/library/api/users";
import { renderCart } from "@/components/cart/renderCart";
import { closeModal } from "@/components/cart/modal";
import { handleTotalPrice } from "@/components/cart/handleTotalPrice";
import { handleDeleteButton } from "@/components/cart/handleDeleteButton";
import { router } from "@/routes";

export const Cart = () => {
  const CartPageHeader = El({
    element: "div",
    className:
      "fixed top-0 z-10 bg-white w-378 py-4 flex justify-between items-center ",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-4",
        children: [
          El({
            element: "img",
            className: "w-4",
            src: "./src/assets/img/shoea/shoea.png",
          }),
          El({
            element: "h1",
            className: "text-xl font-semibold",
            innerText: "My Cart",
          }),
        ],
      }),
      El({
        element: "span",
        className: "bg-white",
        className: "icon-[ep--search] text-xl cursor-pointer",
      }),
    ],
  });

  const CartPageBody = El({
    element: "div",
    id: "cart-page-body",
    className:
      "flex flex-col gap-2 overflow-y-scroll scrollbar-hide pb-56 mt-16",
  });
  getUser(1).then((res) => {
    renderCart(CartPageBody, res.cart);
  });

  const CartPageCheckout = El({
    element: "div",
    className:
      "fixed bottom-16 left-0 border rounded-t-5xl w-428 h-28 bg-white p-6",
    children: [
      El({
        element: "div",
        className: "flex justify-between",
        children: [
          El({
            element: "div",
            className: "flex flex-col",
            children: [
              El({
                element: "span",
                className: "text-xs mb-2",
                innerText: "Total price",
              }),
              El({
                element: "span",
                id: "total-price",
                className: "text-2xl font-bold",
                innerText: handleTotalPrice(),
              }),
            ],
          }),
          El({
            element: "button",
            className: "bg-black text-white px-16 rounded-full shadow-2xl",
            children: [
              El({
                element: "div",
                className: "flex items-center gap-2",
                children: [
                  El({
                    element: "span",
                    innerText: "Checkout",
                  }),
                  El({
                    element: "img",
                    className: "w-4",
                    src: "src/assets/img/right-white.svg",
                  }),
                ],
              }),
            ],
            eventListener: [
              {
                event: "click",
                callback: () => {
                  router.navigate("/checkout");
                },
              },
            ],
          }),
        ],
      }),
    ],
  });

  const DeleteModal = El({
    element: "div",
    id: "overlay",
    className:
      "w-428 h-full fixed bottom-0 left-0 z-50 bg-black bg-opacity-60 hidden",
    children: [
      El({
        element: "div",
        id: "modal",
        className:
          "w-428 h-428 fixed bottom-0 left-0 z-100 border rounded-t-6xl bg-white p-6 transform translate-y-full transition-transform duration-300",
        children: [
          El({
            element: "div",
            className: "flex justify-center mt-[-16px]",
            children: [
              El({
                element: "div",
                className: "w-12 h-1 rounded-lg bg-slate-200 cursor-pointer",
              }),
            ],
            eventListener: [
              {
                event: "click",
                callback: closeModal,
              },
            ],
          }),
          El({
            element: "div",
            className: "text-center",
            children: [
              El({
                element: "h1",
                className: "text-2xl font-bold my-6",
                innerText: "Remove From Cart?",
              }),
            ],
          }),
          El({
            element: "div",
            className: "border-t border-b",
            children: [
              El({
                element: "div",
                id: "modal-item",
                className: "my-6",
              }),
            ],
          }),
          El({
            element: "div",
            className: "grid grid-cols-2 gap-5 my-6",
            children: [
              El({
                element: "button",
                className:
                  "bg-gray-300 text-black-300 font-bold px-6 py-4 rounded-full cursor-pointer",
                children: [
                  El({
                    element: "div",
                    innerText: "Cancel",
                  }),
                ],
                eventListener: [
                  {
                    event: "click",
                    callback: closeModal,
                  },
                ],
              }),
              El({
                element: "button",
                className:
                  "bg-black text-white font-bold px-8 py-6 rounded-full shadow-lg cursor-pointer",
                children: [
                  El({
                    element: "div",
                    innerText: "Yes, Remove",
                  }),
                ],
                eventListener: [
                  {
                    event: "click",
                    callback: handleDeleteButton,
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
    eventListener: [
      {
        event: "click",
        callback: (event) => {
          if (event.target === event.currentTarget) {
            closeModal();
          }
        },
      },
    ],
  });

  return El({
    element: "div",
    className: "flex flex-col",
    children: [CartPageHeader, CartPageBody, CartPageCheckout, DeleteModal],
  });
};
