import { El } from "@/utils";
import { Header } from "@/layout/header";
import { formMsg } from "@/localization/constants/texts";
import Cookies from "js-cookie";
import { getUser } from "@/library/api/users";
import { router } from "@/routes";
import { loginMsg } from "@/localization/constants/texts";

export const Login = () => {
  const LoginPageHeader = Header("");
  LoginPageHeader.classList.add("px-6");

  const LoginLogo = El({
    element: "div",
    className: "w-full absolute top-20",
    children: [
      El({
        element: "div",
        className: "flex justify-center items-center",
        children: [
          El({
            element: "img",
            src: "src/assets/img/shoea/logo.png",
          }),
        ],
      }),
    ],
  });

  const SigninButton = El({
    element: "div",
    className:
      "w-428 h-36 fixed bottom-0 left-0 flex items-center justify-center",
    children: [
      El({
        element: "button",
        id: "signin",
        className:
          "w-378 text-center bg-[#212529] bg-opacity-65 text-white text-sm px-6 py-4 rounded-full cursor-pointer",
        type: "submit",
        innerText: "Sign In",
      }),
    ],
  });

  const LoginForm = El({
    element: "div",
    className: "w-428 h-926 flex justify-center items-center",
    children: [
      El({
        element: "form",
        className: "",
        children: [
          El({
            element: "h1",
            className:
              "text-center text-3.5xl font-semibold text-[#152536] mb-12",
            innerText: formMsg[1],
          }),
          El({
            element: "div",
            className: "relative mb-5",
            children: [
              El({
                element: "input",
                id: "email",
                className:
                  "w-378 bg-[#FAFAFA] placeholder-text-[#6C757D] text-[#212529] text-md rounded pr-3 py-3 pl-10",
                type: "email",
                name: "email",
                placeholder: "Email",
                eventListener: [
                  {
                    event: "keyup",
                    callback: (e) => {
                      if (e.target.value !== "") {
                        envelope.classList.remove("opacity-65");
                      } else {
                        envelope.classList.add("opacity-65");
                      }
                      emailAlert.classList.add("hidden");
                    },
                  },
                ],
              }),
              El({
                element: "img",
                id: "envelope",
                className: "absolute top-[17px] left-[16px] w-4 opacity-65",
                src: "./src/assets/img/envelope.svg",
                alt: "email icon",
              }),
              El({
                element: "div",
                id: "emailAlert",
                className: "text-ssm text-red-400 hidden",
              }),
            ],
          }),
          El({
            element: "div",
            className: "relative mb-10",
            children: [
              El({
                element: "input",
                id: "password",
                className:
                  "w-378 bg-[#FAFAFA] placeholder-text-[#6C757D] text-[#212529] text-md rounded pr-3 py-3 pl-10",
                type: "password",
                name: "password",
                placeholder: "Password",
                eventListener: [
                  {
                    event: "keyup",
                    callback: (e) => {
                      if (e.target.value !== "") {
                        lock.classList.remove("opacity-65");
                        showOrHide.classList.remove("opacity-65");
                      } else {
                        lock.classList.add("opacity-65");
                        showOrHide.classList.add("opacity-65");
                      }
                      passwordAlert.classList.add("hidden");
                    },
                  },
                ],
              }),
              El({
                element: "div",
                id: "showOrHide",
                className: "opacity-65",
                children: [
                  El({
                    element: "img",
                    id: "show",
                    className:
                      "absolute top-[13px] right-[16px] w-4 cursor-pointer",
                    src: "./src/assets/img/eye-slash-fill.svg",
                    alt: "show password icon",
                  }),
                  El({
                    element: "img",
                    id: "hide",
                    className:
                      "absolute top-[13px] right-[16px] w-4 cursor-pointer hidden",
                    src: "./src/assets/img/eye.svg",
                    alt: "hide password icon",
                  }),
                ],
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      password.type =
                        password.type === "password" ? "text" : "password";
                      show.classList.toggle("hidden");
                      hide.classList.toggle("hidden");
                    },
                  },
                ],
              }),
              El({
                element: "img",
                id: "lock",
                className: "absolute top-[13px] left-[16px] w-4 opacity-65",
                src: "./src/assets/img/lock.svg",
                alt: "password icon",
              }),
              El({
                element: "div",
                id: "passwordAlert",
                className: "text-ssm text-red-400 hidden",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex items-center justify-center",
            children: [
              El({
                element: "input",
                id: "checkbox",
                className: "mr-2 accent-black",
                type: "checkbox",
              }),
              El({
                element: "label",
                className: "text-[#212529] text-md",
                innerText: "Remember me",
                attrs: {
                  for: "checkbox",
                },
              }),
            ],
          }),
          SigninButton,
        ],
      }),
    ],
    eventListener: [
      {
        event: "input",
        callback: () => {
          if (email.value !== "" && password.value !== "") {
            signin.classList.remove("bg-opacity-65");
          }
          if (email.value === "" && password.value === "") {
            signin.classList.add("bg-opacity-65");
          }
        },
      },
      {
        event: "submit",
        callback: (e) => {
          e.preventDefault();
          const { email, password, checkbox } = e.target;
          console.log(email.value, password.value, checkbox.checked);
          getUser(1).then((res) => {
            if (email.value === "") {
              emailAlert.innerText = loginMsg[1];
              emailAlert.classList.remove("hidden");
            }
            if (email.value !== "" && res.email !== email.value) {
              emailAlert.innerText = loginMsg[2];
              emailAlert.classList.remove("hidden");
            }
            if (res.email === email.value && res.password !== password.value) {
              if (password.value === "") {
                passwordAlert.innerText = loginMsg[3];
                passwordAlert.classList.remove("hidden");
              } else {
                passwordAlert.innerText = loginMsg[4];
                passwordAlert.classList.remove("hidden");
              }
            }
            if (res.email === email.value && res.password === password.value) {
              if (checkbox.checked) {
                Cookies.set("authenticated", true, { expires: 0.1 / 24 });
              } else {
                Cookies.set("authenticated", true);
              }
              setTimeout(() => {
                router.navigate("/home");
              }, 1000);
            }
          });
        },
      },
    ],
  });

  return El({
    element: "div",
    className: "relative",
    children: [LoginPageHeader, LoginLogo, LoginForm],
  });
};

// function deleteCookie(name) {
//   document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// }

// deleteCookie("authenticated");
