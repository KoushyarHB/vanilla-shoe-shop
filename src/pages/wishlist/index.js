import { WishList } from "@/templates/wishlist";
import { El } from "@/utils";

const WishListPage = () => {
  document.title = "My Wish List";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [WishList()],
  });
};

export default WishListPage;
