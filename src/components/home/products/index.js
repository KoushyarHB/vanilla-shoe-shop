import { El } from "@/utils";
import { getProducts } from "@/library/api/users";
import { renderProducts } from "./renderProducts";

export const Products = () => {
  const elem = El({
    element: "div",
    id: "productsAtHome",
    className:
      "grid grid-cols-2 gap-4 justify-items-stretch max-h-784 overflow-y-scroll scrollbar-hide mb-10",
  });

  getProducts().then((res) => {
    renderProducts(elem, res);
  });

  return elem;
};
