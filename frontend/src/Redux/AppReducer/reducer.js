

import * as types from "./actionType"


const initialState = {
  post: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_PRODUCT_REQUEST:
      return {
        ...state, isLoading: true
      }

    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state, isLoading: false
      }
    case types.ADD_PRODUCT_FAILURE:
      return {
        ...state, isLoading: false,
        isError: true
      }
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state, isLoading: true,
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state, isLoading: false,
        post: payload,
        isError: false
      }
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state, isLoading: false,
        isError: true
      }
    case types.GET_PRODUCTS_REQUEST1:
      return {
        ...state, isLoading: true,
      }
    case types.GET_PRODUCTS_SUCCESS1:
      return {
        ...state, isLoading: false,
        post: payload,
        isError: false
      }
    case types.GET_PRODUCTS_FAILURE1:
      return {
        ...state, isLoading: false,
        isError: true
      }







    default: return state;
  }

};


export { reducer }