import { El } from "@/utils";
import { getUser } from "@/library/api/users";
import { renderCartItem } from "@/components/cart/renderCartItem";

export const Orders = () => {
  const OrdersPageHeader = El({
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
        element: "div",
        className: "flex items-center gap-2",
        children: [
          El({
            element: "img",
            className: "w-14",
            src: "src/assets/img/s.jpg",
          }),
        ],
      }),
    ],
  });

  const OrdersPageBody = El({
    element: "div",
    className: "mt-16",
    children: [
      El({
        element: "div",
        id: "activeOrCompleted",
        className:
          "grid grid-cols-2 text-center text-gray-400 font-semibold border-gray-400 border-b mb-6",
        children: [
          El({
            element: "div",
            id: "active",
            className: "cursor-pointer py-3",
            innerText: "Active",
            eventListener: [
              {
                event: "click",
                callback: () => {
                  active.classList.add(
                    "text-black",
                    "border-b-4",
                    "border-black"
                  );
                  completed.classList.remove(
                    "text-black",
                    "border-b-4",
                    "border-black"
                  );
                  bodyOfOrders.innerHTML = "";
                  bodyOfOrders.append(returnActiveOrders());
                },
              },
            ],
          }),
          El({
            element: "div",
            id: "completed",
            className: "cursor-pointer py-3 text-black border-b-4 border-black",
            innerText: "Completed",
            eventListener: [
              {
                event: "click",
                callback: () => {
                  completed.classList.add(
                    "text-black",
                    "border-b-4",
                    "border-black"
                  );
                  active.classList.remove(
                    "text-black",
                    "border-b-4",
                    "border-black"
                  );
                  bodyOfOrders.innerHTML = "";
                  bodyOfOrders.append(returnCompletedOrders());
                },
              },
            ],
          }),
        ],
      }),
      El({
        element: "div",
        id: "bodyOfOrders",
        children: [returnCompletedOrders()],
      }),
    ],
  });

  return El({
    element: "div",
    children: [OrdersPageHeader, OrdersPageBody],
  });
};

function noOrders(str) {
  return El({
    element: "div",
    id: "noOrders",
    className:
      "w-full h-full flex flex-col justify-center items-center gap-5 text-center mt-20",
    children: [
      El({
        element: "img",
        className: "",
        src: "src/assets/img/doc.png",
      }),
      El({
        element: "h1",
        className: "text-xl font-bold",
        innerText: "You don't have an order yet",
      }),
      El({
        element: "h2",
        className: "text-lg",
        innerText: `You don't have ${str} order at this time`,
      }),
    ],
  });
}

function returnActiveOrders() {
  const activeOrdersDiv = El({
    element: "div",
    id: "activeOrders",
    className: "flex flex-col gap-1 mb-16",
    children: [],
  });
  getUser(1).then((res) => {
    console.log(res.cart.length);
    if (res.cart.length === 0) {
      activeOrdersDiv.append(noOrders("an active"));
    } else {
      res.cart.forEach((cartItem) => {
        const activeOrderElem = renderCartItem(cartItem);
        activeOrderElem.querySelector(".delete-icon").classList.add("hidden");
        activeOrderElem
          .querySelector(".specifications")
          .classList.remove("gap-2");
        activeOrderElem.querySelector(".specifications").classList.add("gap-1");
        activeOrderElem.querySelector(".specifications").append(
          El({
            element: "p",
            className: "text-xxs",
            innerText: "|",
          }),
          El({
            element: "p",
            className: "text-xs",
            innerText: `Qty = ${cartItem.chosenQuantity}`,
          })
        );
        activeOrderElem
          .querySelector(".specifications-parent")
          .classList.remove("pb-5");
        activeOrderElem
          .querySelector(".specifications-parent")
          .insertAdjacentHTML(
            "afterend",
            `<span class="w-20 text-center my-2 px-1 py-1 bg-slate-300 rounded-md text-xs">In Delivery</span>`
          );
        activeOrderElem.querySelectorAll("button").forEach((button) => {
          button.classList.add("hidden");
        });
        activeOrderElem
          .querySelector(`.quantity-buttons`)
          .classList.add("hidden");
        activeOrderElem.querySelector(`.quantity-buttons-parent`).append(
          El({
            element: "div",
            className: "bg-black px-3 py-1 rounded-full text-white text-sm",
            innerText: "Track Order",
          })
        );
        activeOrdersDiv.append(activeOrderElem);
      });
    }
  });
  return activeOrdersDiv;
}

function returnCompletedOrders() {
  const completedOrdersDiv = El({
    element: "div",
    id: "completedOrders",
    className: "flex flex-col gap-1 mb-16",
    children: [],
  });
  getUser(1).then((res) => {
    if (res.orders.length === 0) {
      completedOrdersDiv.append(noOrders("a completed"));
    } else {
      res.orders.forEach((orderItem) => {
        const completedOrderElem = renderCartItem(orderItem);
        completedOrderElem
          .querySelector(".delete-icon")
          .classList.add("hidden");
        completedOrderElem
          .querySelector(".specifications")
          .classList.remove("gap-2");
        completedOrderElem
          .querySelector(".specifications")
          .classList.add("gap-1");
        completedOrderElem.querySelector(".specifications").append(
          El({
            element: "p",
            className: "text-xxs",
            innerText: "|",
          }),
          El({
            element: "p",
            className: "text-xs",
            innerText: `Qty = ${orderItem.chosenQuantity}`,
          })
        );
        completedOrderElem
          .querySelector(".specifications-parent")
          .classList.remove("pb-5");
        completedOrderElem
          .querySelector(".specifications-parent")
          .insertAdjacentHTML(
            "afterend",
            `<span class="w-20 text-center my-2 px-1 py-1 bg-slate-300 rounded-md text-xs">Completed</span>`
          );
        completedOrderElem.querySelectorAll("button").forEach((button) => {
          button.classList.add("hidden");
        });
        completedOrderElem
          .querySelector(`.quantity-buttons`)
          .classList.add("hidden");
        completedOrderElem.querySelector(`.quantity-buttons-parent`).append(
          El({
            element: "div",
            className: "bg-black px-3 py-1 rounded-full text-white text-sm",
            innerText: "Leave Review",
          })
        );
        completedOrdersDiv.append(completedOrderElem);
      });
    }
  });
  return completedOrdersDiv;
}

// const OrderList = template("Order List", OrderListElem);
