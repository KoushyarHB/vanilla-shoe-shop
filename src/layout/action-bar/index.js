import { El } from "@/utils";
import { router } from "@/routes";

export const ActionBar = () => {
  const goingTo = localStorage.getItem("goingTo");
  const basePathString = "./src/assets/img/actionbar-icons";
  const actionBarData = {
    home: {
      default: `${basePathString}/home.svg`,
      selected: `${basePathString}/home-select.svg`,
    },
    cart: {
      default: `${basePathString}/cart.svg`,
      selected: `${basePathString}/cart-select.png`,
    },
    orders: {
      default: `${basePathString}/orders.svg`,
      selected: `${basePathString}/orders-select.png`,
    },
    wallet: {
      default: `${basePathString}/wallet.svg`,
      selected: `${basePathString}/wallet-select.png`,
    },
    profile: {
      default: `${basePathString}/profile.svg`,
      selected: `${basePathString}/profile-select.png`,
    },
  };

  const actionBarElements = [];
  for (let key in actionBarData) {
    const actionObj = actionBarData[key];
    let imageSource =
      goingTo === key ? actionObj["selected"] : actionObj["default"];
    // if (!goingTo) {
    //   imageSource = actionBarData["home"]["selected"];
    // }
    const elem = El({
      element: "button",
      className: "flex flex-col items-center",
      children: [
        El({
          element: "img",
          id: `${key}`,
          className: "action-icon cursor-pointer w-6",
          src: imageSource,
          alt: key + " page",
          eventListener: [
            {
              event: "click",
              callback: (e) => {
                const actionIcons = document.querySelectorAll(".action-icon");
                actionIcons.forEach((actionIcon) => {
                  actionIcon.src = actionBarData[actionIcon.id]["default"];
                });
                e.target.src = actionBarData[e.target.id]["selected"];
                localStorage.setItem("goingTo", e.target.id);
                router.navigate(e.target.id);
              },
            },
          ],
        }),
        El({
          element: "span",
          className: "text-xxs font-bold",
          innerText: key[0].toUpperCase() + key.substring(1),
        }),
      ],
    });
    actionBarElements.push(elem);
  }

  return El({
    element: "div",
    className: "fixed bottom-0 left-0 bg-white w-428 px-6 py-4 border",
    children: [
      El({
        element: "div",
        className: "flex justify-between",
        children: actionBarElements,
      }),
    ],
  });
};
