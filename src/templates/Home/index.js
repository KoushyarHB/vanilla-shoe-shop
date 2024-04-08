import { El } from "@/utils";
import { Profile } from "@/components/home/profile";
import { getUser } from "@/library/api/users";

export const Home = () => {
  const profileElement = El({
    element: "div",
  });
  getUser(1).then((res) => {
    profileElement.append(Profile(res));
  });
  return El({
    element: "div",
    className: "w-428 flex flex-col",
    children: [profileElement],
  });
};
