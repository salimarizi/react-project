import {
  GET_ALL_CATEGORIES,
  GET_SELECTED_CATEGORY
} from "../constants"

const INIT_STATE = {
  categories_data: [],
  category_data: {
    name: ''
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES: {
      return {...state, categories_data: action.payload}
    }

    case GET_SELECTED_CATEGORY: {
      return {...state, category_data: action.payload}
    }

    default:
      return state
  }
}
