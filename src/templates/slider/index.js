import { El } from "@/utils/create-element";
import { router } from "@/routes";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { swiperMsg } from "@/localization/constants/texts";

const slidesData = [
  {
    text: swiperMsg[1],
    src: "./src/assets/img/slides/slide1.jpg",
  },
  {
    text: swiperMsg[2],
    src: "./src/assets/img/slides/slide2.jpg",
  },
  {
    text: swiperMsg[3],
    src: "./src/assets/img/slides/slide3.jpg",
  },
];

const createSlider = () => {
  setTimeout(() => swiperConfig(), 0);
  const swiperContainer = El({
    element: "div",
    className: "swiper",
  });

  const swiperWrapper = El({
    element: "div",
    className: "swiper-wrapper",
  });

  slidesData.forEach((slideData) => {
    const swiperSlide = El({
      element: "div",
      className: "swiper-slide",
      children: [
        El({
          element: "img",
          className: "w-full mb-8",
          src: slideData.src,
        }),
        El({
          element: "div",
          className: "w-378 mx-auto mb-8",
          children: [
            El({
              element: "p",
              className: "text-center text-3.5xl font-semibold",
              innerText: slideData.text,
            }),
          ],
        }),
      ],
    });
    swiperWrapper.append(swiperSlide);
  });

  const swiperPagination = El({
    element: "div",
    className: "swiper-pagination",
  });

  const swiperButton = El({
    element: "div",
    className:
      "w-428 h-36 fixed bottom-0 left-0 flex items-center justify-center",
    children: [
      El({
        element: "button",
        className:
          "w-378 text-center bg-black text-white text-sm px-6 py-4 rounded-full cursor-pointer",
        innerText: "Next",
        eventListener: [
          {
            event: "click",
            callback: (e) => {
              const swiper = document.querySelector(".swiper").swiper;
              if (swiper.activeIndex === 1) {
                e.target.innerText = "Get Started";
              }
              if (swiper.activeIndex === 2) {
                router.navigate("/login");
              }
              swiper.slideNext();
            },
          },
        ],
      }),
    ],
  });

  swiperContainer.append(swiperWrapper, swiperPagination, swiperButton);

  return swiperContainer;
};

const swiperConfig = () => {
  new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    allowTouchMove: false,
  });
};

export const Slider = () => {
  return createSlider();
};
