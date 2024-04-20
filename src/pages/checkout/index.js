import { Checkout } from "@/templates/checkout";
import { El } from "@/utils";

const CheckoutPage = () => {
  document.title = "Checkout Page";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Checkout()],
  });
};

export default CheckoutPage;
