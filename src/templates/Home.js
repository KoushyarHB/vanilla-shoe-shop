import { El } from "@/utils";

export default function Home() {
  return El({
    element: "div",
    className: "w-428 flex flex-col",
    innerText: "Honey I'm home!",
  });
}
