import { El } from "@/utils";
import { getProductsByBrandName } from "@/library/api/users";
import { renderProducts } from "@/components/home/products/renderProducts";
import { Header } from "@/layout/header";

export function Brand(data) {
  const brandName = data.name.toUpperCase();
  const brandPageHeader = Header(data.name);
  const brandPageBody = El({
    element: "div",
    className:
      "grid grid-cols-2 gap-4 overflow-y-scroll scrollbar-hide mt-16 mb-10",
  });
  getProductsByBrandName(brandName).then((res) => {
    renderBrandPage(brandPageBody, res);
  });
  const page = El({
    element: "div",
    children: [brandPageHeader, brandPageBody],
  });
  return page;
}

function renderBrandPage(elem, res) {
  renderProducts(elem, res);
}
