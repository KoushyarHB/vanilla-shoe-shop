import { El } from "@/utils";

export const ProductFilters = () => {
  return El({
    element: "div",
    className: "flex justify-between items-center mb-5",
    children: [
      El({
        element: "button",
        className: "text-base font-semibold",
        innerText: "Most Popular",
      }),
      El({
        element: "button",
        className: "text-base font-semibold",
        innerText: "See All",
      }),
    ],
  });
};
