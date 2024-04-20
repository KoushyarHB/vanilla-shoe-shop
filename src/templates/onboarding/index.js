import { El } from "@/utils";

export const Onboarding = () => {
  return El({
    element: "div",
    className: "relative h-full flex flex-col justify-center items-center",
    children: [
      El({
        element: "div",
        className: "flex gap-3",
        children: [
          El({
            element: "div",
            className:
              "w-14 h-14 rounded-full bg-black flex justify-center items-center ",
            children: [
              El({
                element: "img",
                src: "./src/assets/img/shoea/shoea-white.svg",
              }),
            ],
          }),
          El({
            element: "img",
            src: "./src/assets/img/shoea/shoea.svg",
          }),
        ],
      }),
      El({
        element: "img",
        className: "absolute bottom-28 w-12",
        src: "./src/assets/img/spinner.svg",
      }),
    ],
  });
};
