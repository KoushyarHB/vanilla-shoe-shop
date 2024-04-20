import { El } from "@/utils";
import { Header } from "@/layout/header";
import { getUser } from "@/library/api/users";
import { paymentMsg } from "@/localization/constants/texts";
import { router } from "@/routes";
import { registerUserOrder } from "@/library/api/users";

export const EnterPin = () => {
  const EnterPinPageHeader = Header("Enter Your Pin");

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "⌫"];
  const EnterPinPageBody = El({
    element: "div",
    className: "",
    children: [
      El({
        element: "div",
        className: "fixed bottom-10",
        children: [
          El({
            element: "div",
            className: "relative",
            children: [
              El({
                element: "input",
                id: "input",
                className:
                  "w-full text-center text-xl font-bold bg-black text-white border-4 rounded-full py-3 mb-4",
                placeholder: "Enter PIN",
                type: "password",
                restAttrs: { readonly: true },
              }),
              El({
                element: "p",
                id: "warning",
                className:
                  "absolute -top-10 left-[116px] text-center font-bold text-red-600 hidden",
                innerText: "Wrong PIN number!",
              }),
              El({
                element: "img",
                id: "enterPin",
                className:
                  "absolute top-[17px] right-[24px] w-6 border-white cursor-pointer",
                src: "src/assets/img/enter-pin/login-white.svg",
                alt: "check your pin",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      getUser(1).then((res) => {
                        const correctPin = res.payment.find(
                          (item) => item.chosen
                        ).pin;
                        if (input.value === correctPin) {
                          overlay.classList.remove("hidden");
                          getUser(1).then((res) => {
                            registerUserOrder(1);
                          });
                        } else {
                          warning.classList.remove("hidden");
                          input.classList.add("border-red-600");
                          setTimeout(() => {
                            warning.classList.add("hidden");
                            input.classList.remove("border-red-600");
                          }, 1000);
                        }
                      });
                    },
                  },
                ],
              }),
              El({
                element: "img",
                id: "show",
                className:
                  "absolute top-[18px] right-[54px] w-6 border-white cursor-pointer",
                src: "src/assets/img/enter-pin/show-white-2.svg",
                alt: "show",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      input.type = "text";
                      show.classList.add("hidden");
                      hide.classList.remove("hidden");
                    },
                  },
                ],
              }),
              El({
                element: "img",
                id: "hide",
                className:
                  "absolute top-[18px] right-[54px] w-6 border-white hidden cursor-pointer",
                src: "src/assets/img/enter-pin/hide-white-2.svg",
                alt: "hide",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      input.type = "password";
                      show.classList.remove("hidden");
                      hide.classList.add("hidden");
                    },
                  },
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "w-378 h-full grid grid-cols-3",
            children: keys.map((key) => {
              return El({
                element: "button",
                className:
                  "mx-auto w-16 h-16 bg-white text-2xl font-semibold rounded-full mx-2 my-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                innerText: key.toString(),
                eventListener: [
                  {
                    event: "click",
                    callback: (e) => {
                      const clicked = e.target.innerText;
                      if (clicked !== "⌫") {
                        input.value += e.target.innerText;
                      } else {
                        input.value = input.value.slice(0, -1);
                      }
                    },
                  },
                ],
              });
            }),
          }),
        ],
      }),
    ],
  });

  const Modal = El({
    element: "div",
    id: "overlay",
    className:
      "fixed inset-0 w-428 h-926 z-50 bg-black bg-opacity-60 flex items-center justify-center hidden",
    children: [
      El({
        element: "div",
        id: "modal",
        className:
          "w-3/4 h-1/2 rounded-6xl bg-white p-6 flex flex-col text-center items-center justify-center",
        children: [
          El({
            element: "img",
            className: "mb-4",
            src: "src/assets/img/payment-confirm.jpg",
          }),
          El({
            element: "div",
            className: "flex flex-col mb-6",
            children: [
              El({
                element: "h1",
                className: "text-xl font-bold mb-4",
                innerText: paymentMsg[1],
              }),
              El({
                element: "p",
                className: "text-sm text-gray-700",
                innerText: paymentMsg[2],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex flex-col gap-2 w-full",
            children: [
              El({
                element: "button",
                className:
                  "bg-black text-sm text-white font-semibold px-4 py-3 rounded-full shadow-lg cursor-pointer",
                innerText: paymentMsg[3],
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      localStorage.setItem("goingTo", "orders");
                      router.navigate("/orders");
                    },
                  },
                ],
              }),
              El({
                element: "button",
                className:
                  "w-full bg-[#E7E7E7] text-sm text-black-300 font-semibold px-4 py-3 rounded-full",
                innerText: paymentMsg[4],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return El({
    element: "div",
    children: [EnterPinPageHeader, EnterPinPageBody, Modal],
  });
};
