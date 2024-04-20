import { El } from "@/utils";
import { handleShippingChange } from "./handleShippingChange";
import { shippingElement } from "./shippingElement";

export function renderShippingForm(element, response) {
  const shippings = response;
  element.append(
    El({
      element: "form",
      children: [
        El({
          element: "div",
          className: "flex flex-col gap-8",
          children: shippings.map((shipping, index) => {
            return El({
              element: "div",
              className:
                "flex justify-between items-center rounded-3xl p-4 shadow-top-bottom",
              children: [
                El({
                  element: "label",
                  className: "",
                  attrs: {
                    for: `shipping-${index}`,
                  },
                  children: [shippingElement(shipping)],
                }),
                El({
                  element: "input",
                  type: "radio",
                  className: "accent-black",
                  id: `shipping-${index}`,
                  name: "shipping",
                  value: shipping.title,
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
                      innerText: "Apply",
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
          callback: (event) => handleShippingChange(event),
        },
      ],
    })
  );
  return element;
}
