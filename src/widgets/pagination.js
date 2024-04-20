import { El } from "@/utils";

export const pagination = () => {
  const stars = Math.floor(Math.random() * 11 + 40) / 10;
  const sold = Math.floor(
    Math.random() * (7000 - 3000) + 3000
  ).toLocaleString();
  return El({
    element: "div",
    className: "flex mt-1",
    children: [
      El({
        element: "div",
        className: "flex justify-center items-center gap-1",
        children: [
          El({
            element: "img",
            className: "w-5",
            src: "src/assets/img/half-star.jpg",
          }),
          El({
            element: "span",
            className: "text-xs",
            innerText: stars,
          }),
        ],
      }),
      El({
        element: "img",
        className: "h-4 my-2 ml-2",
        src: "./src/assets/img/separator.jpg",
      }),
      El({
        element: "span",
        className:
          "bg-[#ECECEC] text-xxs px-2 rounded-md flex justify-center items-center ml-2",
        innerText: `${sold} sold`,
      }),
    ],
  });
};
