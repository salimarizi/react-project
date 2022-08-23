import {
  LOGIN,
  LOGOUT,
  FETCH_ERROR
} from "../constants"
import axios from '../util/Api'

export const login = (formData) => {
  return (dispatch) => {
    return axios.post('auth/login/', formData).then(({data}) => {
      if (data) {
        let userData = data.data
        userData.token = data.token
        dispatch({type: LOGIN, payload: userData})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const getProfile = (token) => {
  return (dispatch) => {
    return axios.get('auth/getUser/', {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    }).then(({data}) => {
      if (data) {
        let userData = data.data
        userData.token = token
        dispatch({type: LOGIN, payload: userData})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const logout = () => {
  return (dispatch) => dispatch({type: LOGOUT})
}
