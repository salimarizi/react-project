import {
  GET_ALL_PRODUCTS,
  GET_SELECTED_PRODUCT
} from "../constants"

const INIT_STATE = {
  products_data: [],
  product_data: {
    category_id: '',
    name: '',
    description: '',
    price: 0
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return {...state, products_data: action.payload}
    }

    case GET_SELECTED_PRODUCT: {
      return {...state, product_data: action.payload}
    }

    default:
      return state
  }
}
