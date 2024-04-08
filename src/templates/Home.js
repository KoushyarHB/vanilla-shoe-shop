import { El } from "@/utils";

export default function Home() {
  return El({
    element: "div",
    className: "flex gap-5 my-2",
    innerText: "Honey I'm home!",
  });
}
