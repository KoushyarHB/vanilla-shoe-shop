import { El } from "@/utils";
import { getProductsByBrandName } from "@/library/api/users";
import { renderProducts } from "@/components/home/products/renderProducts";
import { BrandFilters } from "@/components/home/brand-filters";
import { Header } from "@/layout/header";

export function MostPopular() {
  const MostPopularPageHeader = Header("Most Popular");

  const MostPopularPageBody = El({
    element: "div",
    id: "productsAtHome",
    className: "grid grid-cols-2 gap-4 overflow-y-scroll scrollbar-hide mb-10",
  });
  getProductsByBrandName("ALL").then((res) => {
    renderProducts(MostPopularPageBody, res);
  });

  const page = El({
    element: "div",
    children: [
      MostPopularPageHeader,
      El({ element: "div", className: "mt-16", children: [BrandFilters()] }),
      MostPopularPageBody,
    ],
  });

  return page;
}
