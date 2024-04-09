import { Home } from "@/templates/home";
import { El } from "@/utils";
import { Layout } from "@/layout";

const HomePage1 = () => {
  document.title = "Shoea";
  return El({
    element: "div",
    className: "w-428 px-6 py-4 border",
    children: [Layout(Home())],
  });
};

export default HomePage1;
