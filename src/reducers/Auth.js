import {
  LOGIN,
  LOGOUT
} from "../constants"

const INIT_STATE = {
  user_data: {
    token: "",
    id: "",
    name: "",
    email: "",
    password: "",
    role: "",
    address: {
      province_id: 0,
      province_name: "",
      city_id: 0,
      city_name: ""
    },
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN: {
      return {...state, user_data: action.payload}
    }

    case LOGOUT: {
      return {...state, user_data: INIT_STATE.user_data}
    }

    default:
      return state
  }
}
