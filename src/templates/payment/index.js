import { El } from "@/utils";
import { Header } from "@/layout/header";
import { getUser } from "@/library/api/users";
import { renderPaymentForm } from "@/components/payment/renderPaymentForm";

export const Payment = () => {
  const PaymentPageHeader = Header("Payment Methods");
  PaymentPageHeader.append(
    El({
      element: "img",
      className: "w-6 cursor-pointer",
      src: "./src/assets/img/plus-square.jpg",
    })
  );
  const PaymentPageBody = El({
    element: "div",
    className: "mt-16",
    children: [
      El({
        element: "p",
        className: "mb-8",
        innerText: "Select the payment method you want to use.",
      }),
    ],
  });
  getUser(1).then((res) => {
    renderPaymentForm(PaymentPageBody, res.payment);
  });

  return El({
    element: "div",
    children: [PaymentPageHeader, PaymentPageBody],
  });
};
