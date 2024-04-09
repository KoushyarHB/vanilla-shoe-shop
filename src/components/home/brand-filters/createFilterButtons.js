import { El } from "@/utils";
import { brandNames } from "@/localization/constants/brandNames";

const filterButtonTexts = ["All", ...brandNames];
export const filterButtons = filterButtonTexts.map((text) => {
  const classesString =
    "text-base font-semibold text-[#343A40] border-2 border-[#343A40] rounded-full whitespace-nowrap px-5 py-2 mr-3";
  const classes = text !== "All" ? classesString : classesString + " selected";
  return El({
    element: "button",
    className: classes,
    innerText: text,
  });
});
