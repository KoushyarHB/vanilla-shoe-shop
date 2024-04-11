import { getProductsByBrandName } from "@/library/api/users";
import { renderProducts } from "../products/renderProducts";

export const handleFilterButtonAction = (e) => {
  e.preventDefault();
  const query = e.target.innerText.toUpperCase();
  const productsDiv = document.getElementById("productsAtHome");
  productsDiv.innerHTML = "";
  getProductsByBrandName(query).then((res) => {
    console.log(res);
    productsDiv.innerHTML = "";
    renderProducts(productsDiv, res);
  });
};
