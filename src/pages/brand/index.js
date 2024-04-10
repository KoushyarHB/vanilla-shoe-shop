import { Brand } from "@/templates/brand";
import { El } from "@/utils";

const BrandPage = (data) => {
  document.title = "Brand Page";
  return El({
    element: "div",
    className: "w-428 px-6 py-4 border",
    children: [Brand(data)],
  });
};

export default BrandPage;