import { El } from "@/utils";
import { welcomeMsg } from "@/localization/constants/texts";

export const Welcome = () => {
  return El({
    element: "div",
    className: "h-full w-full bg-[url('src/assets/img/welcome-wallpaper.jpg')]",
    children: [
      El({
        element: "div",
        className: "h-full w-full bg-gradient-to-b from-transparent to-black",
        children: [
          El({
            element: "div",
            className: "h-full flex flex-col justify-end px-6 py-4 text-white",
            children: [
              El({
                element: "h1",
                className: "text-4.5xl font-semibold mb-4",
                innerText: welcomeMsg[1],
              }),
              El({
                element: "img",
                className: "w-56 mb-7",
                src: "src/assets/img/shoea/shoea-name-white.png",
              }),
              El({
                element: "p",
                className: "text-base font-semibold mb-20",
                innerText: welcomeMsg[2],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
