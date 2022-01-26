export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };

    case "ALL_PRODUCTS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case "PRODUCT_DETAILS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
