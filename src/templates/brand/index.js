import { El } from "@/utils";
import { getProductsByBrandName } from "@/library/api/users";
import { renderProducts } from "@/components/home/products/renderProducts";

export function Brand(data) {
  const brandName = data.name.toUpperCase();
  const brandPageHeader = El({
    element: "div",
    className: "flex items-center gap-3 pb-8",
    children: [
      El({
        element: "button",
        innerText: "back",
        eventListener: [
          {
            event: "click",
            callback: () => {
              window.history.back();
            },
          },
        ],
        children: [
          El({
            element: "span",
            className: "icon-[ic--outline-shopping-cart]",
          }),
        ],
      }),
      El({
        element: "h1",
        className: "text-xl font-semibold",
        innerText: data.name,
      }),
    ],
  });
  const brandPageBody = El({
    element: "div",
    className: "grid grid-cols-2 gap-4 overflow-y-scroll scrollbar-hide mb-10",
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
