import { Cart } from "@/templates/cart";
import { El } from "@/utils";
import { Layout } from "@/layout";

const CartPage = () => {
  document.title = "Cart Page";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Layout(Cart())],
  });
};

export default CartPage;
