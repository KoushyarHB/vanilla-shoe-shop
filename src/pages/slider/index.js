import { El } from "@/utils";
import { Slider } from "@/templates/slider";

const SliderPage = () => {
  document.title = "Here you are!";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide border",
    children: [Slider()],
  });
};

export default SliderPage;
