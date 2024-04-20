import { Payment } from "@/templates/payment";
import { El } from "@/utils";

const PaymentPage = () => {
  document.title = "Payment";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Payment()],
  });
};

export default PaymentPage;
