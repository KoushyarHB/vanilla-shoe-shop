import { changePayment } from "@/library/api/users";
import { router } from "@/routes";

export function handlePaymentChange(event) {
  event.preventDefault();
  console.log("hi!");
  const { payment } = event.target;
  changePayment(1, payment.value);
  router.navigate("/enter-pin");
}
