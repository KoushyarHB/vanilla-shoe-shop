import { Product } from "@/templates/product";
import { El } from "@/utils";

const ProductPage = (data) => {
  document.title = "Product Page";
  return El({
    element: "div",
    className: "w-428 overflow-y-scroll scrollbar-hide border",
    children: [Product(data)],
  });
};

export default ProductPage;
