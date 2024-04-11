import { El } from "@/utils";
import { Link } from "@/components/link";

export const ProductFilters = () => {
  return El({
    element: "div",
    className: "flex justify-between items-center mb-5",
    children: [
      Link({
        href: `/most-popular`,
        element: "button",
        className: "text-base font-semibold",
        innerText: "Most Popular",
      }),
      Link({
        href: `/most-popular`,
        element: "button",
        className: "text-base font-semibold",
        innerText: "See All",
      }),
    ],
  });
};
