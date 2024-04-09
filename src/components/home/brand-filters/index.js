import { El } from "@/utils";
import { filterButtons } from "./createFilterButtons";
import { handleFilterButtonsStyle } from "./handleFilterButtonsStyle";

export const BrandFilters = () => {
  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("click", (e) => handleFilterButtonsStyle(e));
  });
  return El({
    element: "div",
    className: "flex overflow-scroll scrollbar-hide mb-6",
    children: filterButtons,
  });
};
