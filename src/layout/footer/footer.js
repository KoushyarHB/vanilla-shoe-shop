import { El } from "@/utils";

export const Footer = () => {
  return El({
    element: "p",
    className: "bg-red-400 text-white",
    innerText: "I'm the footer",
  });
};
