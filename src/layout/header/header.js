import { El } from "@/utils";

export const Header = () => {
  return El({
    element: "p",
    className: "w-428 bg-red-400 text-white",
    innerText: "I'm the header!",
  });
};
