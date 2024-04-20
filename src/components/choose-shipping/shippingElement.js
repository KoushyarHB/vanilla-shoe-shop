import { El } from "@/utils";

export function shippingElement(shipping) {
  return El({
    element: "div",
    className: "flex items-center gap-6",
    children: [
      El({
        element: "div",
        className: "flex gap-4 items-center",
        children: [
          El({
            element: "div",
            className:
              "flex justify-center items-center w-12 h-12 border-2 rounded-full bg-black",
            children: [
              El({
                element: "img",
                className: "w-6",
                src: `./src/assets/img/shipping/${shipping.title.toLowerCase()}.jpg`,
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex-grow flex justify-between items-center",
            children: [
              El({
                element: "div",
                className: "flex flex-col",
                children: [
                  El({
                    element: "div",
                    className: "flex",
                    children: [
                      El({
                        element: "h2",
                        className: "text-md font-bold",
                        innerText: shipping.title,
                      }),
                    ],
                  }),

                  El({
                    element: "h3",
                    className: "text-sm text-grey",
                    innerText: shipping.detail,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "font-bold",
        innerText: "$" + shipping.price,
      }),
    ],
  });
}
