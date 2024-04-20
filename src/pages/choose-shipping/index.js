import { ChooseShipping } from "@/templates/choose-shipping";
import { El } from "@/utils";

const ChooseShippingPage = () => {
  document.title = "Choose Shipping";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [ChooseShipping()],
  });
};

export default ChooseShippingPage;
