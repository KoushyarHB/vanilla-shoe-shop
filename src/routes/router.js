import Navigo from "navigo";
import { changePage } from "@/utils";
import HomePage from "@/pages/Home";
const router = new Navigo("/");

export const Router = () => {
  router.on("/", () => {
    changePage(HomePage);
  });
  return router;
};
