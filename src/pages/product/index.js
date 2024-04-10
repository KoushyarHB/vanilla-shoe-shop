import { Product } from "@/templates/product";
import { El } from "@/utils";

const ProductPage = (data) => {
  document.title = "Product Page";
  return El({
    element: "div",
    className: "w-428 border",
    children: [Product(data)],
  });
};

export default ProductPage;
