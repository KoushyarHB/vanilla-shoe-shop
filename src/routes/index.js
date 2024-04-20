import Navigo from "navigo";
import { isAuthenticated } from "@/utils/isAuthenticated";
import { changePage } from "@/utils";
import HomePage from "@/pages/home/index";
import WishListPage from "@/pages/wishlist";
import BrandPage from "@/pages/brand";
import MostPopularPage from "@/pages/most-popular";
import ProductPage from "@/pages/product/index";
import CartPage from "@/pages/cart";
import OrdersPage from "@/pages/orders";
import WalletPage from "@/pages/wallet";
import ProfilePage from "@/pages/profile";
import CheckoutPage from "@/pages/checkout";
import ShippingAddressPage from "@/pages/shipping-address";
import ChooseShippingPage from "@/pages/choose-shipping";
import PaymentPage from "@/pages/payment";
import EnterPinPage from "@/pages/enter-pin";
import OnboardingPage from "@/pages/onboarding";
import WelcomePage from "@/pages/welcome";
import SliderPage from "@/pages/slider";
import LoginPage from "@/pages/login";
import SearchPage from "@/pages/search";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(OnboardingPage);
  })
  .on("/welcome", () => {
    changePage(WelcomePage);
  })
  .on("/slider", () => {
    changePage(SliderPage);
  })
  .on("/login", () => {
    changePage(LoginPage);
  })
  .on("/home", () => {
    if (isAuthenticated()) {
      changePage(HomePage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/cart", () => {
    if (isAuthenticated()) {
      changePage(CartPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/orders", () => {
    if (isAuthenticated()) {
      changePage(OrdersPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/wallet", () => {
    if (isAuthenticated()) {
      changePage(WalletPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/profile", () => {
    if (isAuthenticated()) {
      changePage(ProfilePage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/products/:id", ({ data }) => {
    if (isAuthenticated()) {
      changePage(ProductPage, data);
    } else {
      router.navigate("/login");
    }
  })
  .on("/wishlist", () => {
    if (isAuthenticated()) {
      changePage(WishListPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/search", () => {
    if (isAuthenticated()) {
      changePage(SearchPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/brands/:name", ({ data }) => {
    if (isAuthenticated()) {
      changePage(BrandPage, data);
    } else {
      router.navigate("/login");
    }
  })
  .on("/most-popular", () => {
    if (isAuthenticated()) {
      changePage(MostPopularPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/checkout", () => {
    if (isAuthenticated()) {
      changePage(CheckoutPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/shipping-address", () => {
    if (isAuthenticated()) {
      changePage(ShippingAddressPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/choose-shipping", () => {
    if (isAuthenticated()) {
      changePage(ChooseShippingPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/payment", () => {
    if (isAuthenticated()) {
      changePage(PaymentPage);
    } else {
      router.navigate("/login");
    }
  })
  .on("/enter-pin", () => {
    if (isAuthenticated()) {
      changePage(EnterPinPage);
    } else {
      router.navigate("/login");
    }
  });
