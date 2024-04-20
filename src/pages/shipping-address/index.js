import { ShippingAddress } from "@/templates/shipping-address";
import { El } from "@/utils";

const ShippingAddressPage = () => {
  document.title = "Shipping Address";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [ShippingAddress()],
  });
};

export default ShippingAddressPage;
