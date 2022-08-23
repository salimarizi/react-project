import {
  GET_ALL_PRODUCTS,
  GET_SELECTED_PRODUCT,
  FETCH_ERROR,
  FETCH_SUCCESS
} from "../constants"
import axios from '../util/Api'

export const getAllProducts = () => {
  return (dispatch) => {
    return axios.get('products/').then(({data}) => {
      if (data) {
        dispatch({type: GET_ALL_PRODUCTS, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const getAllProductsByCategory = (category) => {
  return (dispatch) => {
    return axios.get(`products/category/${category}`).then(({data}) => {
      if (data) {
        dispatch({type: GET_ALL_PRODUCTS, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const getSelectedProducts = (product_id) => {
  return (dispatch) => {
    return axios.get(`products/${product_id}`).then(({data}) => {
      if (data) {
        dispatch({type: GET_SELECTED_PRODUCT, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const storeProduct = (formData) => {
  return (dispatch) => {
    return axios.post(`products/`, formData).then(({data}) => {
      if (data) {
        dispatch({type: GET_SELECTED_PRODUCT, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const updateProduct = (product_id, formData) => {
  return (dispatch) => {
    return axios.patch(`products/${product_id}`, formData).then(({data}) => {
      if (data) {
        dispatch({type: GET_SELECTED_PRODUCT, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const deleteProduct = (product_id) => {
  return (dispatch) => {
    return axios.delete(`products/${product_id}`).then(({data}) => {
      if (data) {
        dispatch({type: FETCH_SUCCESS, payload: 'success delete'})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}