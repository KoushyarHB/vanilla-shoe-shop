import { El } from "@/utils";

export function addressElement(address, isHome) {
  return El({
    element: "div",
    className: "flex gap-4 items-center",
    children: [
      El({
        element: "div",
        className:
          "flex justify-center items-center w-14 h-14 border-8 rounded-full bg-black",
        children: [
          El({
            element: "img",
            className: "w-5",
            src: "./src/assets/img/address/location.jpg",
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
                    innerText: address.title,
                  }),
                  El({
                    element: "div",
                    className: `bg-slate-200 text-xxs px-2 py-1 ml-2 rounded-md ${
                      !isHome ? "hidden" : ""
                    }`,
                    innerText: "Default",
                  }),
                ],
              }),

              El({
                element: "h3",
                className: "text-sm text-grey",
                innerText: address.detail,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
