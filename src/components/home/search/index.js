import { El } from "@/utils";

export const Search = () => {
  return El({
    element: "div",
    className: "relative py-2",
    children: [
      El({
        element: "input",
        className: "w-full bg-[#FAFAFA] rounded py-2 px-3 pl-10",
        placeholder: "Search",
      }),
      El({
        element: "img",
        className: "absolute bottom-5 left-4",
        src: "./src/assets/img/magnifier.svg",
      }),
    ],
  });
};
