import Navigo from "navigo";
import { changePage } from "@/utils";
import HomePage1 from "@/pages/home/homepage-one/index";
import ProductPage from "@/pages/product/index";

// const router = new Navigo("/");
export const router = new Navigo("/");

// export const Router = () => {
//   router
//     .on("/", () => {
//       changePage(HomePage1);
//     })
//     .on("/products/:id", ({ data }) => {
//       changePage(ProductPage, data);
//     });
//   return router;
// };

router
  .on("/", () => {
    changePage(HomePage1);
  })
  .on("/products/:id", ({ data }) => {
    console.log("here we are " + data);
    changePage(ProductPage, data);
  });
