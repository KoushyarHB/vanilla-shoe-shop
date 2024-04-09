import { El } from "@/utils";

export const renderProduct = (obj) => {
  console.log(obj.title);
  return El({
    element: "div",
    className: "flex flex-col mb-6",
    children: [
      El({
        element: "div",
        className:
          "w-182 h-182 flex justify-center items-center bg-[#EBEFF2] rounded-3xl mb-3",
        children: [
          El({
            element: "img",
            className: "w-142 h-142",
            src: obj.imageURL,
          }),
        ],
      }),
      El({
        element: "span",
        className:
          "text-xl font-bold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap",
        innerText: obj.name,
      }),
      El({
        element: "span",
        className: "text-base font-semibold",
        innerText: `$ ${obj.price}.00`,
      }),
    ],
  });
};
