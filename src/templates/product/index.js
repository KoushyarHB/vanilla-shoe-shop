import { El } from "@/utils";
import { getProductById, getUser, updateUserCart } from "@/library/api/users";
import { handleAddToWishList } from "@/components/product-page/handleAddToWishList";

export function Product(data) {
  const productId = data.id;
  const elem = El({
    element: "div",
  });
  getProductById(productId).then((res) => {
    renderProductPage(elem, res);
  });
  return elem;
}

function renderProductPage(element, response) {
  response.chosenQuantity = 1;
  response.chosenColor = response.colors[0];
  response.chosenSize = response.sizes[2];
  let userWishList;
  let classesOfFavorite = "";
  getUser(1).then((res) => {
    userWishList = res.wishlist || [];
    const searchWishList = userWishList.findIndex(
      (item) => item.id === response.id
    );
    if (searchWishList === -1) {
      classesOfFavorite = "icon-[ph--heart-light] text-2xl";
    } else {
      classesOfFavorite = "icon-[ph--heart-fill] bg-red-600 text-2xl";
    }
    const page = El({
      element: "div",
      className: "flex flex-col relative",
      children: [
        El({
          element: "button",
          className: "absolute top-8 left-4",
          children: [
            El({
              element: "span",
              className: "icon-[ep--back] text-2xl",
            }),
          ],
          eventListener: [
            {
              event: "click",
              callback: () => {
                window.history.back();
              },
            },
          ],
        }),
        El({
          element: "div",
          id: "msgModal",
          className: "absolute inset-16 hidden",
          children: [
            El({
              element: "div",
              className: "flex justify-center",
              children: [
                El({
                  element: "div",
                  id: "msgDiv",
                  className:
                    "w-full rounded-lg bg-white border-2 border-gray-400 p-4 text-md text-gray-400 text-center",
                  innerText: "",
                }),
              ],
            }),
          ],
        }),
        El({
          element: "img",
          className: "h-96",
          src: response.imageURL,
        }),
        El({
          element: "div",
          className: "px-6 py-6",
          children: [
            El({
              element: "div",
              className: "mb-4",
              children: [
                El({
                  element: "div",
                  className: "flex justify-between items-center mb-4",
                  children: [
                    El({
                      element: "h1",
                      className: "w-64 text-xl font-bold",
                      innerText: response.name,
                    }),
                    El({
                      element: "button",
                      children: [
                        El({
                          element: "span",
                          id: "favorite",
                          className: classesOfFavorite,
                        }),
                      ],
                      eventListener: [
                        {
                          event: "click",
                          callback: () => {
                            handleAddToWishList(1, response);
                          },
                        },
                      ],
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "flex mb-4",
                  children: [
                    El({
                      element: "span",
                      className:
                        "bg-[#ECECEC] text-xs px-2 py-1 rounded-sm flex justify-center items-center mr-4",
                      innerText: "5,371 sold",
                    }),
                    El({
                      element: "div",
                      className: "flex justify-center items-center gap-1",
                      children: [
                        El({
                          element: "span",
                          className: "icon-[ic--round-star-half]",
                        }),
                        El({
                          element: "span",
                          className: "text-xs",
                          innerText: "4.3 (5,389 reviews)",
                        }),
                      ],
                    }),
                  ],
                }),
                El({
                  element: "hr",
                }),
              ],
            }),
            El({
              element: "div",
              className: "mb-4",
              children: [
                El({
                  element: "h2",
                  className: "font-bold mb-3",
                  innerText: "Description",
                }),
                El({
                  element: "p",
                  className: "text-xs mb-3",
                  innerText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
                  children: [
                    El({
                      element: "span",
                      className: "font-bold",
                      innerText: "view more..",
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "flex gap-10 mb-3",
                  children: [
                    El({
                      element: "div",
                      className: "flex flex-col",
                      children: [
                        El({
                          element: "h2",
                          className: "font-bold mb-3",
                          innerText: "Size",
                        }),
                        El({
                          element: "div",
                          className: "flex gap-2 mb-3",
                          children: response.sizes.map((size) => {
                            const baseString =
                              "size w-9 h-9 rounded-full flex justify-center items-center text-xs font-bold border-2";
                            const classesString =
                              size === response.chosenSize
                                ? baseString + " bg-[#343A40] text-white"
                                : baseString + " text-[#343A40]";
                            return El({
                              element: "div",
                              className: classesString,
                              innerText: size,
                              eventListener: [
                                {
                                  event: "click",
                                  callback: (e) => {
                                    const sizeButtons =
                                      document.querySelectorAll(".size");
                                    sizeButtons.forEach((sizeButton) => {
                                      sizeButton.classList.remove(
                                        "bg-[#343A40]",
                                        "text-white"
                                      );
                                    });
                                    e.target.classList.add(
                                      "bg-[#343A40]",
                                      "text-white"
                                    );
                                    response.chosenSize = Number(
                                      e.target.innerText
                                    );
                                  },
                                },
                              ],
                            });
                          }),
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex flex-col",
                      children: [
                        El({
                          element: "h2",
                          className: "font-bold mb-3",
                          innerText: "Color",
                        }),
                        El({
                          element: "div",
                          className: "flex gap-2",
                          children: response.colors.map((color) => {
                            const baseStringForButtons = `color w-9 h-9 flex justify-center bg-[${color}] items-center rounded-full`;
                            const classesStringForButtons =
                              color === "white"
                                ? baseStringForButtons + " border-2"
                                : baseStringForButtons;
                            const baseStringForSpans =
                              "icon-[ep--select] bg-slate-600 text-xl";
                            const classesStringForSpans =
                              color === response.chosenColor
                                ? baseStringForSpans
                                : baseStringForSpans + " invisible";
                            return El({
                              element: "button",
                              className: classesStringForButtons,
                              children: [
                                El({
                                  element: "span",
                                  className: classesStringForSpans,
                                }),
                              ],
                              eventListener: [
                                {
                                  event: "click",
                                  callback: (e) => {
                                    const colorButtons =
                                      document.querySelectorAll(".color span");
                                    colorButtons.forEach((colorButton) => {
                                      colorButton.classList.add("invisible");
                                    });
                                    e.target
                                      .querySelector("span")
                                      .classList.remove("invisible");
                                    response.chosenColor = color;
                                  },
                                },
                              ],
                            });
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className:
                    "relative flex justify-start items-center gap-10 mb-5",
                  children: [
                    El({
                      element: "h2",
                      className: "font-bold",
                      innerText: "Quantity",
                    }),
                    El({
                      element: "div",
                      className:
                        "flex items-center bg-[#ECECEC] py-2 rounded-full",
                      children: [
                        El({
                          element: "button",
                          className: "font-bold px-4 rounded-full",
                          children: [
                            El({
                              element: "span",
                              className: "flex items-center icon-[ep--minus]",
                            }),
                          ],
                          eventListener: [
                            {
                              event: "click",
                              callback: () => {
                                const quantity =
                                  document.getElementById("quantity");
                                const totalPrice =
                                  document.getElementById("totalPrice");
                                let q = Number(quantity.innerText);
                                if (q > 1) {
                                  q -= 1;
                                  quantity.innerText = q;
                                } else {
                                  quantity.innerText = 1;
                                }
                                totalPrice.innerText =
                                  "$ " + Number(response.price) * q + ".00";
                                response.chosenQuantity = q;
                              },
                            },
                          ],
                        }),
                        El({
                          element: "span",
                          id: "quantity",
                          className: "font-bold px-3",
                          innerText: "1",
                        }),
                        El({
                          element: "button",
                          className: "font-bold px-4 rounded-full",
                          children: [
                            El({
                              element: "span",
                              className: "flex items-center icon-[ep--plus]",
                            }),
                          ],
                          eventListener: [
                            {
                              event: "click",
                              callback: () => {
                                const quantity =
                                  document.getElementById("quantity");
                                const totalPrice =
                                  document.getElementById("totalPrice");
                                let q = Number(quantity.innerText);
                                if (q < response.items_left) {
                                  q += 1;
                                  quantity.innerText = q;
                                } else {
                                  console.log("No items left!");
                                  noItemsLeft.classList.remove("hidden");
                                  setTimeout(() => {
                                    noItemsLeft.classList.add("hidden");
                                  }, 1200);
                                }
                                totalPrice.innerText =
                                  "$ " + Number(response.price) * q + ".00";
                                response.chosenQuantity = q;
                              },
                            },
                          ],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      id: "noItemsLeft",
                      className:
                        "absolute right-9 text-md text-red-600 font-semibold hidden",
                      innerText: "No items left!",
                    }),
                  ],
                }),
                El({
                  element: "hr",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex justify-between",
              children: [
                El({
                  element: "div",
                  className: "flex flex-col",
                  children: [
                    El({
                      element: "span",
                      className: "text-xxs mb-2",
                      innerText: "Total price",
                    }),
                    El({
                      element: "span",
                      id: "totalPrice",
                      className: "text-lg font-bold",
                      innerText: "$ " + response.price + ".00",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  className: "bg-black text-white px-16 rounded-full shadow-lg",
                  children: [
                    El({
                      element: "div",
                      className: "flex items-center gap-2",
                      children: [
                        El({
                          element: "span",
                          className: "icon-[solar--bag-4-outline] text-md",
                          style: "color: white",
                        }),
                        El({
                          element: "span",
                          innerText: "Add to Cart",
                        }),
                      ],
                    }),
                  ],
                  eventListener: [
                    {
                      event: "click",
                      callback: () => {
                        response.orderStatus = "active";
                        updateUserCart(1, response).then((msg) => {
                          msgDiv.innerText = msg;
                          msgModal.classList.remove("hidden");
                          setTimeout(() => {
                            msgModal.classList.add("hidden");
                          }, 2000);
                        });
                      },
                    },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
    element.append(page);
  });
  return element;
}
