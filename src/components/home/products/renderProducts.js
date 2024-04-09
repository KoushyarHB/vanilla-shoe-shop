import { El } from "@/utils";
import { renderProduct } from "./renderProduct";

export const renderProducts = (element, response) => {
  response.forEach((res) => {
    element.append(renderProduct(res));
  });
};
