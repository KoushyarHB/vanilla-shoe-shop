import { El } from "@/utils";
import { getProductsWithSearch } from "@/library/api/users";
import { renderProduct } from "@/components/home/products/renderProduct";
import { pagination } from "@/widgets/pagination";
import { getUser } from "@/library/api/users";
import { updateUserWishlist } from "@/library/api/users";

export const Search = () => {
  // queryHistoryButtons();
  // const searchWishList = userWishList.findIndex(
  //   (item) => item.id === response.id
  // );
  // if (searchWishList === -1) {
  //   classesOfFavorite = "icon-[ph--heart-light] text-2xl";
  // } else {
  //   classesOfFavorite = "icon-[ph--heart-fill] bg-red-600 text-2xl";
  // }
  return El({
    element: "div",
    children: [
      El({
        element: "form",
        className: "relative py-2 mb-4",
        children: [
          El({
            element: "input",
            id: "query",
            className:
              "w-full bg-[#F5F5F5] rounded-2xl py-4 px-3 pl-10 focus:outline",
            placeholder: "Search",
            restAttrs: {
              autofocus: "",
            },
          }),
          El({
            element: "img",
            className: "absolute bottom-7 left-4",
            src: "./src/assets/img/magnifier.svg",
          }),
          El({
            element: "img",
            className: "absolute bottom-7 right-4 w-5",
            src: "./src/assets/img/filter.jpg",
          }),
        ],
        eventListener: [
          {
            event: "submit",
            callback: (e) => {
              e.preventDefault();
              if (query.value !== "") {
                let queryHistory =
                  JSON.parse(localStorage.getItem("queryH")) || [];
                const whereInHistory = queryHistory.findIndex(
                  (item) => item === `${query.value}`
                );
                if (whereInHistory === -1) {
                  queryHistory = [query.value, ...queryHistory];
                } else {
                  queryHistory.splice(whereInHistory, 1);
                  queryHistory = [query.value, ...queryHistory];
                }
                localStorage.setItem("queryH", JSON.stringify(queryHistory));
              }
              initial.classList.add("hidden");
              searchResultNotFound.classList.add("hidden");
              searchResult.classList.remove("hidden");
              getProductsWithSearch(query.value).then((res) => {
                searchResultQuery.innerText = `Results for "${query.value}"`;
                searchResultFound.innerText = `${res.length} found`;
                searchResultBody.innerHTML = "";
                if (res.length > 0) {
                  res.forEach((res) => {
                    const item = renderProduct(res);
                    item.classList.add("relative");
                    item.append(
                      El({
                        element: "div",
                        id: `heart-${item.id}`,
                        className:
                          "w-8 h-8 bg-black absolute top-3 right-3 rounded-full flex items-center justify-center",
                        children: [
                          El({
                            element: "img",
                            className: "w-4",
                            src: "src/assets/img/heart-accent-white.svg",
                          }),
                        ],
                        eventListener: [
                          {
                            event: "click",
                            callback: (e) => {
                              updateUserWishlist(1, res);
                              // const imageSource =
                              //   e.target.querySelector("img").src;
                              // console.log(e.target.querySelector("img"));
                              // if (
                              //   imageSource ===
                              //   "src/assets/img/heart-accent-white.svg"
                              // ) {
                              //   e.target.querySelector("img").src =
                              //     "src/assets/img/heart-accent-red.svg";
                              // } else {
                              //   e.target.querySelector("img").src =
                              //     "src/assets/img/heart-accent-white.svg";
                              // }
                            },
                          },
                        ],
                      })
                    );
                    item.querySelector(".name").append(pagination());
                    searchResultBody.appendChild(item);
                  });
                  searchResultBody.classList.remove("hidden");
                } else {
                  searchResultNotFound.classList.remove("hidden");
                }
              });
            },
          },
          {
            event: "input",
            callback: () => {
              if (query.value === "") {
                queryHistoryButtons();
                initial.classList.remove("hidden");
                searchResult.classList.add("hidden");
              }
            },
          },
        ],
      }),
      El({
        element: "div",
        id: "initial",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className: "flex justify-between pb-4 border-b",
            children: [
              El({
                element: "span",
                className: "text-md font-semibold",
                innerText: "Recent",
              }),
              El({
                element: "span",
                className: "text-md font-semibold cursor-pointer",
                innerText: "Clear All",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      queryHistoryDiv.innerHTML = "";
                      localStorage.setItem("queryH", JSON.stringify([]));
                    },
                  },
                ],
              }),
            ],
          }),
          El({
            element: "div",
            id: "queryHistoryDiv",
            className: "",
            children: queryHistoryButtons(),
          }),
        ],
      }),
      El({
        element: "div",
        id: "searchResult",
        className: "hidden",
        children: [
          El({
            element: "div",
            id: "searchResultHeader",
            className: "flex justify-between pb-4 border-b mb-4",
            children: [
              El({
                element: "span",
                id: "searchResultQuery",
                className: "text-md font-semibold",
                innerText: "ًResults for ",
              }),
              El({
                element: "span",
                id: "searchResultFound",
                className: "text-md font-semibold",
                innerText: "found",
              }),
            ],
          }),
          El({
            element: "div",
            id: "searchResultBody",
            className:
              "grid grid-cols-2 gap-4 justify-items-stretch max-h-784 overflow-y-scroll scrollbar-hide mb-10",
          }),
          El({
            element: "div",
            id: "searchResultNotFound",
            className:
              "w-full h-full flex flex-col justify-center items-center gap-5 text-center mt-10 hidden",
            children: [
              El({
                element: "img",
                className: "",
                src: "src/assets/img/doc.png",
              }),
              El({
                element: "h1",
                className: "text-xl font-bold",
                innerText: "Not Found",
              }),
              El({
                element: "h2",
                className: "text-lg",
                innerText:
                  "Sorry! The keyword you entered did not match any results. Please check again or enter another keyword.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

function queryHistoryButtons() {
  getUser(1).then((res) => {
    queryHistoryDiv.innerHTML = "";
    const buttons = El({
      element: "div",
      className: "flex flex-col",
    });
    const queryHistory = JSON.parse(localStorage.getItem("queryH")) || [];
    queryHistory.forEach((item, index) => {
      const button = El({
        element: "div",
        id: index,
        className: "flex justify-between items-center my-3",
        children: [
          El({
            element: "span",
            id: `query-${index}`,
            className: "text-gray-400 cursor-pointer",
            innerText: item,
            eventListener: [
              {
                event: "click",
                callback: (e) => {
                  query.value = e.target.innerText;
                },
              },
            ],
          }),
          El({
            element: "img",
            id: `closeBtn-${index}`,
            className: "w-6 cursor-pointer",
            src: "src/assets/img/close-square.jpg",
            innerText: item,
            eventListener: [
              {
                event: "click",
                callback: (e) => {
                  const query = e.target.previousElementSibling.innerText;
                  let queryHistory = JSON.parse(localStorage.getItem("queryH"));
                  const whereInHistory = queryHistory.findIndex(
                    (item) => item === query
                  );
                  queryHistory.splice(whereInHistory, 1);
                  localStorage.setItem("queryH", JSON.stringify(queryHistory));
                  e.target.parentElement.remove();
                },
              },
            ],
          }),
        ],
      });
      buttons.append(button);
    });
    queryHistoryDiv.append(buttons);
  });
}
