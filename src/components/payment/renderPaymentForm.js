import { El } from "@/utils";
import { handlePaymentChange } from "./handlePaymentChange";
import { Link } from "../link";
import { paymentElement } from "./paymentElement";

export function renderPaymentForm(element, response) {
  const payment = response;
  element.append(
    El({
      element: "form",
      children: [
        El({
          element: "div",
          className: "flex flex-col gap-8",
          children: payment.map((payment, index) => {
            return El({
              element: "div",
              className:
                "flex justify-between items-center rounded-3xl p-4 shadow-top-bottom",
              children: [
                El({
                  element: "label",
                  className: "",
                  attrs: {
                    for: `payment-${index}`,
                  },
                  children: [paymentElement(payment)],
                }),
                El({
                  element: "input",
                  type: "radio",
                  id: `payment-${index}`,
                  className: "accent-black",
                  name: "payment",
                  value: payment.title,
                }),
                El({
                  element: "div",
                  className:
                    "w-428 h-28 fixed bottom-0 left-0 border rounded-t-6xl bg-white flex items-center justify-center",
                  children: [
                    El({
                      element: "button",
                      type: "submit",
                      className:
                        "w-378 text-center bg-black text-white font-bold px-6 py-4 rounded-full shadow-lg cursor-pointer",
                      innerText: "Confirm Payment",
                    }),
                  ],
                }),
              ],
            });
          }),
        }),
      ],
      eventListener: [
        {
          event: "submit",
          callback: (event) => handlePaymentChange(event),
        },
      ],
    })
  );
  return element;
}
