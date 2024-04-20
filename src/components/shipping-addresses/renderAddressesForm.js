import { El } from "@/utils";
import { handleAddressChange } from "./handleAddressChange";
import { addressElement } from "./addressElement";

export function renderAddressesForm(element, response) {
  const addresses = response.addresses;
  element.append(
    El({
      element: "form",
      children: [
        El({
          element: "div",
          className: "flex flex-col gap-8",
          children: addresses.map((address, index) => {
            const isHomeAddress = address.title === "Home";
            return El({
              element: "div",
              className:
                "flex justify-between items-center rounded-3xl p-4 shadow-top-bottom",
              children: [
                El({
                  element: "label",
                  className: "",
                  attrs: {
                    for: `address-${index}`,
                  },
                  children: [addressElement(address, isHomeAddress)],
                }),
                El({
                  element: "input",
                  type: "radio",
                  id: `address-${index}`,
                  className: "accent-black",
                  name: "address",
                  value: address.title,
                  checked: isHomeAddress ? "checked" : "",
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
          callback: (event) => handleAddressChange(event),
        },
      ],
    }),
    El({
      element: "div",
      className:
        "mt-8 text-center bg-gray-300 text-black-300 font-bold px-6 py-4 rounded-full cursor-pointer",
      innerText: "Add New Address",
    })
  );
  return element;
}
