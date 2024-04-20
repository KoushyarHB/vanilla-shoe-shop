import { El } from "@/utils";
import { Login } from "@/templates/login";

const LoginPage = () => {
  document.title = "Log in to Shoea";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide border",
    children: [Login()],
  });
};

export default LoginPage;
