import { EnterPin } from "@/templates/enter-pin";
import { El } from "@/utils";

const EnterPinPage = () => {
  document.title = "Enter Pin";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [EnterPin()],
  });
};

export default EnterPinPage;
