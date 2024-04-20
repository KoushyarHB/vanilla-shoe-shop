import { El } from "@/utils";
import { Onboarding } from "@/templates/onboarding";
import { router } from "@/routes";

const OnboardingPage = () => {
  setTimeout(() => {
    router.navigate("/welcome");
  }, 3000);
  document.title = "Get Onboard";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Onboarding()],
  });
};

export default OnboardingPage;
