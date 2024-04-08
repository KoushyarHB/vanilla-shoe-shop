import Navigo from "navigo";
import { changePage } from "@/utils";
import HomePage1 from "@/pages/index";
const router = new Navigo("/");

export const Router = () => {
  router.on("/", () => {
    changePage(HomePage1);
  });
  return router;
};
