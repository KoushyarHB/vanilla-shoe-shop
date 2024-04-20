import { El } from "@/utils";
import { openModal } from "@/components/cart/modal";
import { getUser } from "@/library/api/users";
import { handleMinusBtn, handlePlusBtn } from "./handlePlusAndMinusButtons";

export const renderCartItem = (obj) => {
  const id = obj.id;
  return El({
    element: "div",
    id: id,
    className: "flex gap-4 rounded-3xl px-4 py-4 shadow-top-bottom m-2",
    children: [
      El({
        element: "img",
        src: obj.imageURL,
        className: "w-32 h-32 rounded-3xl",
      }),
      El({
        element: "div",
        className: "flex-grow flex flex-col pt-2",
        children: [
          El({
            element: "div",
            className: "flex justify-between items-center pb-2",
            children: [
              El({
                element: "h1",
                className:
                  "font-bold max-w-36 overflow-hidden overflow-ellipsis whitespace-nowrap",
                innerText: obj.name,
              }),
              El({
                element: "span",
                className:
                  "delete-icon icon-[solar--trash-bin-2-linear] text-2xl",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      getUser(1).then((res) => {
                        const deletionCandidate = res.cart.find(
                          (item) => item.id === id
                        );
                        localStorage.setItem(
                          "idOfDeletionCandidate",
                          String(id)
                        );
                        const modalItem = renderCartItem(deletionCandidate);
                        const deleteIcon =
                          modalItem.querySelector(".delete-icon");
                        deleteIcon.classList.add("hidden");
                        const minusBtn = modalItem.querySelector(".minus-btn");
                        const plusBtn = modalItem.querySelector(".plus-btn");
                        minusBtn.removeEventListener("click", handleMinusBtn);
                        plusBtn.removeEventListener("click", handlePlusBtn);
                        const modalItemDiv =
                          document.getElementById("modal-item");
                        modalItemDiv.innerHTML = "";
                        modalItemDiv.append(modalItem);
                      });
                      openModal();
                    },
                  },
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "specifications-parent flex items-center pb-5",
            children: [
              El({
                element: "div",
                className: "specifications flex items-center gap-2",
                children: [
                  El({
                    element: "div",
                    className: `w-5 h-5 rounded-full border-2 bg-[${obj.chosenColor}]`,
                  }),
                  El({
                    element: "p",
                    className: "text-xs",
                    innerText:
                      obj.chosenColor[0].toUpperCase() +
                      obj.chosenColor.substring(1),
                  }),
                  El({
                    element: "p",
                    className: "text-xxs",
                    innerText: "|",
                  }),
                  El({
                    element: "p",
                    className: "text-xs",
                    innerText: `Size = ${obj.chosenSize}`,
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "quantity-buttons-parent flex justify-between items-center",
            children: [
              El({
                element: "span",
                id: `cart-item-total-${obj.id}`,
                className: "text-md font-bold",
                innerText: "$" + obj.price * obj.chosenQuantity + ".00",
              }),
              El({
                element: "div",
                className:
                  "quantity-buttons flex items-center bg-[#ECECEC] py-2 rounded-full",
                children: [
                  El({
                    element: "button",
                    className: "minus-btn font-bold px-3 rounded-full",
                    children: [
                      El({
                        element: "span",
                        className: "flex items-center icon-[ep--minus] text-xs",
                      }),
                    ],
                    eventListener: [
                      {
                        event: "click",
                        callback: () => handleMinusBtn(obj),
                      },
                    ],
                  }),
                  El({
                    element: "span",
                    id: `quantity-${obj.id}`,
                    className: "font-bold px-1 text-xs",
                    innerText: obj.chosenQuantity,
                  }),
                  El({
                    element: "button",
                    className: "plus-btn font-bold px-3 rounded-full",
                    children: [
                      El({
                        element: "span",
                        className: "flex items-center icon-[ep--plus] text-xs",
                      }),
                    ],
                    eventListener: [
                      {
                        event: "click",
                        callback: () => handlePlusBtn(obj),
                      },
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
