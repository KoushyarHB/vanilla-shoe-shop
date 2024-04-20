import { El } from "@/utils";

export const Header = (data) => {
  return El({
    element: "div",
    // className: "flex justify-between items-center pb-8",
    className:
      "fixed top-0 z-20 bg-white w-378 py-4 flex justify-between items-center",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-3",
        children: [
          El({
            element: "button",
            className: "flex items-center",
            eventListener: [
              {
                event: "click",
                callback: () => {
                  window.history.back();
                },
              },
            ],
            children: [
              El({
                element: "span",
                className: "icon-[ep--back] text-2xl",
              }),
            ],
          }),
          El({
            element: "h1",
            className: "text-xl font-semibold",
            innerText: data,
          }),
        ],
      }),
    ],
  });
};
