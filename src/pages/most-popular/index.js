import { MostPopular } from "@/templates/most-popular";
import { El } from "@/utils";

const MostPopularPage = () => {
  document.title = "Most Popular Page";
  return El({
    element: "div",
    className: "w-428 px-6 py-4 border",
    children: [MostPopular()],
  });
};

export default MostPopularPage;
