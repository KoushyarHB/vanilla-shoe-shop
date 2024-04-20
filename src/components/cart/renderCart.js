import { renderCartItem } from "./renderCartItem";

export const renderCart = (element, response) => {
  response.forEach((res) => {
    element.append(renderCartItem(res));
  });
};
