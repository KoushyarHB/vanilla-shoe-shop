import { getProductsByBrandName } from "@/library/api/users";
import { renderProducts } from "../products/renderProducts";

export const handleFilterButtonAction = (e) => {
  const query = e.target.innerText.toUpperCase();
  const productsDiv = document.getElementById("productsAtHome");
  productsDiv.innerHTML = "";
  getProductsByBrandName(query).then((res) => {
    renderProducts(productsDiv, res);
  });
};
