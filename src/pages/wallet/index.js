import { Wallet } from "@/templates/wallet";
import { El } from "@/utils";
import { Layout } from "@/layout";

const WalletPage = () => {
  document.title = "Wallet Page";
  return El({
    element: "div",
    className: "w-428 h-926 overflow-y-scroll scrollbar-hide px-6 py-4 border",
    children: [Layout(Wallet())],
  });
};

export default WalletPage;
