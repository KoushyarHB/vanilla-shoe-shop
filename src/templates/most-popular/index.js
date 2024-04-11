import { El } from "@/utils";
import { getProductsByBrandName } from "@/library/api/users";
import { renderProducts } from "@/components/home/products/renderProducts";
import { BrandFilters } from "@/components/home/brand-filters";

export function MostPopular() {
  const MostPopularPageHeader = El({
    element: "div",
    className: "flex items-center gap-3 pb-8",
    children: [
      El({
        element: "button",
        className: "flex items-center",
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
            className: "icon-[ep--back] text-2xl",
          }),
        ],
      }),
      El({
        element: "h1",
        className: "text-xl font-semibold",
        innerText: "Most Popular",
      }),
    ],
  });

  const MostPopularPageBody = El({
    element: "div",
    id: "productsAtHome",
    className: "grid grid-cols-2 gap-4 overflow-y-scroll scrollbar-hide mb-10",
  });
  getProductsByBrandName("ALL").then((res) => {
    renderMostPopularPage(MostPopularPageBody, res);
  });

  const page = El({
    element: "div",
    children: [MostPopularPageHeader, BrandFilters(), MostPopularPageBody],
  });
  return page;
}

function renderMostPopularPage(elem, res) {
  renderProducts(elem, res);
}
