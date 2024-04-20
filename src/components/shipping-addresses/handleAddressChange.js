import { changeAddress } from "@/library/api/users";

export function handleAddressChange(event) {
  event.preventDefault();
  const { address } = event.target;
  changeAddress(1, address.value);
}
