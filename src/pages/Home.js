import { Home } from "@/templates/Home/index";
import { El } from "@/utils";
import { Layout } from "@/layout/layout";

export default function HomePage() {
  document.title = "Shoea";
  return El({
    element: "div",
    children: [Layout(Home())],
  });
}
