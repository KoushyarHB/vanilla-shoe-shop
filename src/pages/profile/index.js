import { Profile } from "@/templates/profile";
import { El } from "@/utils";
import { Layout } from "@/layout";

const ProfilePage = () => {
  document.title = "Profile Page";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Layout(Profile())],
  });
};

export default ProfilePage;
