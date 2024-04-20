import { Search } from "@/templates/search";
import { El } from "@/utils";
import { Layout } from "@/layout";

const SearchPage = () => {
  document.title = "Search";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Layout(Search())],
  });
};

export default SearchPage;
