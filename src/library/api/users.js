import axios from "axios";
import { BASE_URL } from "@/localization/constants/apiConfig";

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting product:", error);
    throw error;
  }
};

export const getProductsByBrandName = async (name) => {
  const baseQuery = `${BASE_URL}/products`;
  const queryString = name === "ALL" ? baseQuery : baseQuery + `?brand=${name}`;
  try {
    const response = await axios.get(queryString);
    return response.data;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

export const updateUserWishlist = async (userId, newItem) => {
  try {
    const user = await axios.get(`${BASE_URL}/users/${userId}`);
    const currentWishlist = user.data.wishlist || [];
    const searchWishList = currentWishlist.findIndex(
      (item) => item.id === newItem.id
    );
    let updatedWishlist;
    if (searchWishList === -1) {
      updatedWishlist = [newItem, ...currentWishlist];
    } else {
      currentWishlist.splice(searchWishList, 1);
      updatedWishlist = currentWishlist;
    }
    const response = await axios.patch(`${BASE_URL}/users/${userId}`, {
      wishlist: updatedWishlist,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating wishlist:", error);
    throw error;
  }
};

export const updateUserCart = async (userId, newItem) => {
  try {
    const user = await axios.get(`${BASE_URL}/users/${userId}`);
    const currentCart = user.data.cart || [];
    const searchCart = currentCart.findIndex((item) => item.id === newItem.id);
    let updatedCart;
    let msg;
    if (searchCart === -1) {
      msg = "New item added to your cart.";
      updatedCart = [newItem, ...currentCart];
    } else if (
      currentCart[searchCart].chosenColor !== newItem.chosenColor ||
      currentCart[searchCart].chosenSize !== newItem.chosenSize
    ) {
      msg = "New item added to your cart.";
      updatedCart = [newItem, ...currentCart];
    } else {
      msg = "Already in your cart! Quantity updated.";
      currentCart[searchCart] = newItem;
      updatedCart = currentCart;
    }
    const response = await axios.patch(`${BASE_URL}/users/${userId}`, {
      cart: updatedCart,
    });
    return msg;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};

export const deleteItemFromUserCart = async (userId, itemId) => {
  try {
    const user = await axios.get(`${BASE_URL}/users/${userId}`);
    const currentCart = user.data.cart || [];
    const searchCart = currentCart.findIndex((item) => item.id === itemId);
    currentCart.splice(searchCart, 1);
    const response = await axios.patch(`${BASE_URL}/users/${userId}`, {
      cart: currentCart,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};

export const changeAddress = async (userId, addressTitle) => {
  try {
    const user = await axios.get(`${BASE_URL}/users/${userId}`);
    const addresses = user.data.addresses;
    const updatedAddreses = [];
    addresses.map((address) => {
      if (address.title === addressTitle) {
        address.chosen = true;
      } else {
        address.chosen = false;
      }
      updatedAddreses.push(address);
    });
    const response = await axios.patch(`${BASE_URL}/users/${userId}`, {
      addresses: updatedAddreses,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};

export const changeShipping = async (userId, shippingTitle) => {
  try {
    const user = await axios.get(`${BASE_URL}/users/${userId}`);
    const shipping = user.data.shipping;
    const updatedShipping = [];
    shipping.map((shipping) => {
      if (shipping.title === shippingTitle) {
        shipping.chosen = true;
      } else {
        shipping.chosen = false;
      }
      updatedShipping.push(shipping);
    });
    const response = await axios.patch(`${BASE_URL}/users/${userId}`, {
      shipping: updatedShipping,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};

export const changePayment = async (userId, paymentMethodTitle) => {
  try {
    const user = await axios.get(`${BASE_URL}/users/${userId}`);
    const payment = user.data.payment;
    const updatedPayment = [];
    payment.map((method) => {
      if (method.title === paymentMethodTitle) {
        method.chosen = true;
      } else {
        method.chosen = false;
      }
      updatedPayment.push(method);
    });
    console.log(updatedPayment);
    const response = await axios.patch(`${BASE_URL}/users/${userId}`, {
      payment: updatedPayment,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating payment method:", error);
    throw error;
  }
};

export const getProductsWithSearch = async (searchQuery) => {
  try {
    const response = await axios.get(`${BASE_URL}/products?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

export const registerUserOrder = async (userId) => {
  try {
    const user = await axios.get(`${BASE_URL}/users/${userId}`);
    let userCart = user.data.cart;
    let userOrders = user.data.orders;
    userCart.forEach((item) => {
      item.paymentStatus = "done";
      item.orderStatus = "completed";
      // userOrders.push(item);
      userOrders = [item, ...userOrders];
    });
    userCart = [];
    console.log(userCart, userOrders);
    const firstResponse = await axios.patch(`${BASE_URL}/users/${userId}`, {
      cart: userCart,
    });
    const secondResponse = await axios.patch(`${BASE_URL}/users/${userId}`, {
      orders: userOrders,
    });
    return secondResponse.data;
  } catch (error) {
    console.error("Error registering order:", error);
    throw error;
  }
};
