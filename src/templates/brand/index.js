import { El } from "@/utils";

export function Brand(data) {
  console.log(data);
  const elem = El({
    element: "div",
    innerText: data,
  });
  return elem;
}
