import {
  GET_USER_TRANSACTIONS,
  GET_SELECTED_TRANSACTION,
  FETCH_ERROR,
  FETCH_SUCCESS
} from "../constants"
import axios from '../util/Api'

export const getAllTransactions = (user_id) => {
  return (dispatch) => {
    return axios.get(`transactions/users/${user_id}`).then(({data}) => {
      if (data) {
        dispatch({type: GET_USER_TRANSACTIONS, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const getSelectedTransaction = (transaction_id) => {
  return (dispatch) => {
    return axios.get(`transactions/${transaction_id}`).then(({data}) => {
      if (data) {
        dispatch({type: GET_SELECTED_TRANSACTION, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const addToCart = (formData) => {
  return (dispatch) => {
    return axios.post(`transactions/`, formData).then(({data}) => {
      if (data) {
        dispatch({type: GET_SELECTED_TRANSACTION, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const deleteTransaction = (transaction_id) => {
  return (dispatch) => {
    return axios.delete(`transactions/${transaction_id}`).then(({data}) => {
      if (data) {
        dispatch({type: FETCH_SUCCESS, payload: 'success delete'})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}