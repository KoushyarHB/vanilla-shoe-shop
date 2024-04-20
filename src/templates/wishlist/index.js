import { El } from "@/utils";
import { getUser } from "@/library/api/users";
import { renderProduct } from "@/components/home/products/renderProduct";
import { pagination } from "@/widgets/pagination";
import { BrandFilters } from "@/components/home/brand-filters";
import { Header } from "@/layout/header";
import { updateUserWishlist } from "@/library/api/users";

export function WishList() {
  const WishListPageHeader = Header("My Wish List");
  WishListPageHeader.append(
    El({
      element: "span",
      className: "icon-[ep--search] text-xl cursor-pointer",
    })
  );

  const WishListPageBody = El({
    element: "div",
    id: "wishListPageBody",
    className: "grid grid-cols-2 gap-4 overflow-y-scroll scrollbar-hide mb-10",
  });
  getUser(1).then((res) => {
    const wishListPageBody = document.getElementById("wishListPageBody");
    res.wishlist.forEach((res) => {
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
              callback: () => {
                updateUserWishlist(1, res);
              },
            },
          ],
        })
      );
      item.querySelector(".name").append(pagination());

      wishListPageBody.appendChild(item);
    });
  });

  const page = El({
    element: "div",
    children: [
      WishListPageHeader,
      El({ element: "div", className: "mt-16", children: [BrandFilters()] }),
      WishListPageBody,
    ],
  });
  return page;
}
