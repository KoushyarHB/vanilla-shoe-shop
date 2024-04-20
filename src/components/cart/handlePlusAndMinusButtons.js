import { getUser } from "@/library/api/users";
import { updateUserCart } from "@/library/api/users";
import { handleTotalPrice } from "./handleTotalPrice";

export function handleMinusBtn(obj) {
  const quantity = document.getElementById(`quantity-${obj.id}`);
  const cartItemTotal = document.getElementById(`cart-item-total-${obj.id}`);
  let q = Number(quantity.innerText);
  if (q > 1) {
    q -= 1;
    quantity.innerText = q;
  } else {
    quantity.innerText = 1;
  }
  cartItemTotal.innerText = "$" + obj.price * q + ".00";
  getUser(1).then((res) => {
    const cartItemToBeModified = res.cart.find((item) => item.id === obj.id);
    cartItemToBeModified.chosenQuantity = q;
    updateUserCart(1, cartItemToBeModified).then(() => handleTotalPrice());
  });
}

export function handlePlusBtn(obj) {
  const quantity = document.getElementById(`quantity-${obj.id}`);
  const cartItemTotal = document.getElementById(`cart-item-total-${obj.id}`);
  let q = Number(quantity.innerText);
  if (q < obj.items_left) {
    q += 1;
    quantity.innerText = q;
  } else {
    console.log("No items left!");
  }
  cartItemTotal.innerText = "$" + obj.price * q + ".00";
  getUser(1).then((res) => {
    const cartItemToBeModified = res.cart.find((item) => item.id === obj.id);
    cartItemToBeModified.chosenQuantity = q;
    updateUserCart(1, cartItemToBeModified).then(() => handleTotalPrice());
  });
}
