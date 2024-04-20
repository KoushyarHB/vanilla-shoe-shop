import Cookies from "js-cookie";

export function isAuthenticated() {
  return Cookies.get("authenticated") === "true";
}
