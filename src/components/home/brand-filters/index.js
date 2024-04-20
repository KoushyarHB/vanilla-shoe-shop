import { El } from "@/utils";
import { filterButtons } from "./createFilterButtons";
import { handleFilterButtonsStyle } from "./handleFilterButtonsStyle";
import { handleFilterButtonAction } from "./handleFilterButtonAction";

export const BrandFilters = () => {
  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("click", (e) => {
      handleFilterButtonsStyle(e);
      handleFilterButtonAction(e);
    });
  });
  return El({
    element: "div",
    id: "filter-buttons",
    className: "flex overflow-scroll scrollbar-hide mb-6",
    children: filterButtons,
  });
};
