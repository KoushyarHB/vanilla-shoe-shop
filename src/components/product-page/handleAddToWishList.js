import { updateUserWishlist } from "@/library/api/users";

export function handleAddToWishList(userId, obj) {
  const favoriteButton = document.getElementById("favorite");
  favoriteButton.classList.toggle("icon-[ph--heart-light]");
  favoriteButton.classList.toggle("icon-[ph--heart-fill]");
  favoriteButton.classList.toggle("bg-red-600");
  updateUserWishlist(userId, obj);
}
