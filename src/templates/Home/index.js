import { El } from "@/utils";
import { Profile } from "./Profile";

export const Home = () => {
  return El({
    element: "div",
    className: "w-428 flex flex-col",
    children: [Profile()],
  });
};
