import { closeModal } from "./modal";
import { deleteItemFromUserCart } from "@/library/api/users";
import { renderCart } from "./renderCart";
import { getUser } from "@/library/api/users";
import { handleTotalPrice } from "./handleTotalPrice";

export function handleDeleteButton() {
  const idOfItemToBeDeleted = Number(
    localStorage.getItem("idOfDeletionCandidate")
  );
  deleteItemFromUserCart(1, idOfItemToBeDeleted)
    .then(() => {
      const cartPageBody = document.getElementById("cart-page-body");
      cartPageBody.innerHTML = "";
      getUser(1).then((res) => {
        renderCart(cartPageBody, res.cart);
      });
    })
    .then(() => handleTotalPrice());
  closeModal();
}
