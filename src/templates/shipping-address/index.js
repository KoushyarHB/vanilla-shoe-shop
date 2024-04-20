import { El } from "@/utils";
import { Header } from "@/layout/header";
import { getUser } from "@/library/api/users";
import { renderAddressesForm } from "@/components/shipping-addresses/renderAddressesForm";

export const ShippingAddress = () => {
  const ShippingAddressPageHeader = Header("Shipping Address");
  const ShippingAddressPageBody = El({
    element: "div",
    className: "mt-16",
    id: "addressesDiv",
  });
  getUser(1).then((res) => {
    renderAddressesForm(ShippingAddressPageBody, res);
  });

  return El({
    element: "div",
    children: [ShippingAddressPageHeader, ShippingAddressPageBody],
  });
};
