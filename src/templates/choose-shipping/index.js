import { El } from "@/utils";
import { Header } from "@/layout/header";
import { getUser } from "@/library/api/users";
import { renderShippingForm } from "@/components/choose-shipping/renderShippingForm";

export const ChooseShipping = () => {
  const ChooseShippingPageHeader = Header("Choose Shipping");
  const ChooseShippingPageBody = El({
    element: "div",
    className: "mt-16",
    id: "chooseShippingDiv",
  });
  getUser(1).then((res) => {
    renderShippingForm(ChooseShippingPageBody, res.shipping);
  });

  return El({
    element: "div",
    children: [ChooseShippingPageHeader, ChooseShippingPageBody],
  });
};
