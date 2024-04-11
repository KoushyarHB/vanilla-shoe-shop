import { filterButtons } from "./createFilterButtons";

export const handleFilterButtonsStyle = (e) => {
  e.preventDefault();
  for (let filterButton of filterButtons) {
    if (filterButton.innerText === e.target.innerText) {
      filterButton.classList.add("selected");
    } else {
      filterButton.classList.remove("selected");
    }
  }
};
