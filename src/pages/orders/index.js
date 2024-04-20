import { Orders } from "@/templates/orders";
import { El } from "@/utils";
import { Layout } from "@/layout";

const OrdersPage = () => {
  document.title = "Orders Page";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Layout(Orders())],
  });
};

export default OrdersPage;
