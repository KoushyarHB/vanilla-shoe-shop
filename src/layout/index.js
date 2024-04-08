import { El } from "@/utils";
import { Footer } from "./footer";

export function Layout(main) {
  return El({
    element: "div",
    children: [
      El({
        element: "main",
        children: [main],
      }),
      Footer(),
    ],
  });
}
