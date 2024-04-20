import { changeShipping } from "@/library/api/users";

export function handleShippingChange(event) {
  event.preventDefault();
  const { shipping } = event.target;
  changeShipping(1, shipping.value);
}
