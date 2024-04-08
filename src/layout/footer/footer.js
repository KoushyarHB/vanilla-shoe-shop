import { El } from "@/utils";

export const Footer = () => {
  const footerIcons = [
    { src: "./src/assets/img/footer-icons/home-select.svg", text: "Home" },
    { src: "./src/assets/img/footer-icons/cart.svg", text: "Cart" },
    { src: "./src/assets/img/footer-icons/orders.svg", text: "Orders" },
    { src: "./src/assets/img/footer-icons/wallet.svg", text: "Wallet" },
    { src: "./src/assets/img/footer-icons/profile.svg", text: "Profile" },
  ];

  const footerElements = footerIcons.map((icon) => {
    return El({
      element: "button",
      className: "flex flex-col items-center",
      children: [
        El({
          element: "img",
          src: icon.src,
          alt: icon.text,
        }),
        El({
          element: "span",
          className: "text-xxs font-bold",
          innerText: icon.text,
        }),
      ],
    });
  });

  return El({
    element: "div",
    className: "w-428 px-12 pt-3 pb-4",
    children: [
      El({
        element: "div",
        className: "flex justify-between",
        children: footerElements,
      }),
    ],
  });
};
