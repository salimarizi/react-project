import {
  GET_USER_TRANSACTIONS,
  GET_SELECTED_TRANSACTION
} from "../constants"

const INIT_STATE = {
  transactions_data: [],
  transaction_data: {
    user_id: '',
    shipping_cost: 0,
    total_price: 0,
    is_paid: 0,
    addresses: [{
      province_id: '',
      province_name: '',
      city_id: '',
      city_name: '',
    }],
    products: [{
      category_id: '',
      name: '',
      description: '',
      price: 0,
    }]
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER_TRANSACTIONS: {
      return {...state, transactions_data: action.payload}
    }

    case GET_SELECTED_TRANSACTION: {
      return {...state, transaction_data: action.payload}
    }

    default:
      return state
  }
}
