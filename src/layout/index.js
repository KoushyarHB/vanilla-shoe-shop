import { El } from "@/utils";
import { ActionBar } from "./action-bar";

export function Layout(main) {
  return El({
    element: "div",
    children: [
      El({
        element: "main",
        children: [main],
      }),
      ActionBar(),
    ],
  });
}
