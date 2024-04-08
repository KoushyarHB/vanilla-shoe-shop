import { El } from "@/utils";

export const Profile = (user) => {
  return El({
    element: "div",
    id: "profile",
    className: "w-428 px-6 py-4 flex justify-between",
    children: [
      El({
        element: "div",
        className: "flex",
        children: [
          El({
            element: "img",
            className: "w-12 rounded-full mr-4",
            src: user.image,
            alt: "profile-image",
          }),
          El({
            element: "div",
            className: "flex flex-col",
            children: [
              El({
                element: "span",
                className: "text-base font-bold text-[#757475]",
                innerText: "Good Morning 👋",
              }),
              El({
                element: "span",
                innerText: user.name,
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex",
        children: [
          El({
            element: "img",
            className: "mr-4",
            src: "./src/assets/img/Alert.svg",
          }),
          El({
            element: "img",
            src: "./src/assets/img/Heart.svg",
          }),
        ],
      }),
    ],
  });
};