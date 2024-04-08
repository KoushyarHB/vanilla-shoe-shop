import { El } from "@/utils";

export const Footer = () => {
  return El({
    element: "p",
    className: "w-428 bg-red-400 text-white",
    innerText: "I'm the footer",
  });
};
