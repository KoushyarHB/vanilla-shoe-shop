import { Brand } from "@/templates/brand";
import { El } from "@/utils";

const BrandPage = (data) => {
  document.title = "Brand Page";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Brand(data)],
  });
};

export default BrandPage;
