import { El } from "@/utils";

export function paymentElement(payment) {
  return El({
    element: "div",
    className: "flex items-center gap-6",
    children: [
      El({
        element: "div",
        className: "flex gap-4 items-center",
        children: [
          El({
            element: "div",
            className: "flex justify-center items-center",
            children: [
              El({
                element: "img",
                className: "w-6",
                src: payment.image,
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex-grow flex justify-between items-center",
            children: [
              El({
                element: "h2",
                className: "text-md font-bold",
                innerText: payment.title,
              }),
              El({
                element: "span",
                className: "pl-40 font-bold text-sm text-gray-700",
                innerText:
                  payment.title === "My Wallet" ? payment.allowance : "",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
