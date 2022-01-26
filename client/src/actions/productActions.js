import * as api from "../api";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: "ALL_PRODUCTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "ALL_PRODUCTS_FAIL" });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProductDetails(id);
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "PRODUCT_DETAILS_FAIL" });
  }
};
