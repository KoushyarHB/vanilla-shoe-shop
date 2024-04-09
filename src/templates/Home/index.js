import { El } from "@/utils";
import { Profile } from "@/components/home/profile";
import { getUser } from "@/library/api/users";
import { Search } from "@/components/home/search";
import { Brands } from "@/components/home/brands";
import { ProductFilters } from "@/components/home/product-filters";
import { BrandFilters } from "@/components/home/brand-filters";
import { Products } from "@/components/home/products";

export const Home = () => {
  const profileElement = El({
    element: "div",
  });
  getUser(1).then((res) => {
    profileElement.append(Profile(res));
  });
  return El({
    element: "div",
    className: "flex flex-col",
    children: [
      profileElement,
      Search(),
      Brands(),
      ProductFilters(),
      BrandFilters(),
      Products(),
    ],
  });
};
