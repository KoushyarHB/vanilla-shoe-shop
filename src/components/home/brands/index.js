import { El } from "@/utils";
import { brandNames } from "@/localization/constants/brandNames";
import { Link } from "@/components/link";

export const Brands = () => {
  const brands = [...brandNames, "More"];
  return El({
    element: "div",
    className: "grid grid-cols-4 px-3 py-2",
    children: brands.map((brandName) => {
      return El({
        element: "div",
        className: "flex flex-col items-center gap-3 mb-7",
        children: [
          Link({
            href: `/brands/${brandName}`,
            element: "button",
            className:
              "flex justify-center items-center bg-[#ECECEC] w-16 h-16 rounded-full",
            children: [
              El({
                element: "img",
                src: "./src/assets/img/brand-logos/" + brandName + ".png",
              }),
            ],
          }),
          El({
            element: "span",
            className:
              "text-sm font-semibold max-w-64 overflow-hidden overflow-ellipsis text-center whitespace-nowrap",
            innerText: brandName !== "More" ? brandName : "More ..",
          }),
        ],
      });
    }),
  });
};
