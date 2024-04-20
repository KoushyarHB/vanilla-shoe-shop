import { getUser } from "@/library/api/users";

export const handleTotalPrice = () => {
  getUser(1).then((res) => {
    const totalPriceSpan = document.getElementById("total-price");
    let totalPrice = 0;
    res.cart.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.chosenQuantity;
    });
    totalPriceSpan.innerText = "$ " + totalPrice + ".00";
  });
};
