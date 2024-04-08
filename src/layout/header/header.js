import { El } from "@/utils";

export const Header = () => {
  return El({
    element: "p",
    className: "bg-red-400 text-white",
    innerText: "I'm the header!",
  });
};
