import * as api from "../api";

export const addProductToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await api.fetchProductDetails(id);

  dispatch({
    type: "ADD_TO_CART",
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      image: data.image,
      stock: data.stock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeProductFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: "REMOVE_ITEM_FROM_CART",
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
