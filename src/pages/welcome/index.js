import { El } from "@/utils";
import { Welcome } from "@/templates/welcome";
import { router } from "@/routes";

const WelcomePage = () => {
  setTimeout(() => {
    router.navigate("/slider");
  }, 3000);
  document.title = "Welcome!";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide border",
    children: [Welcome()],
  });
};

export default WelcomePage;
