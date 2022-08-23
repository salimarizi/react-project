import {
  GET_ALL_CATEGORIES,
  GET_SELECTED_CATEGORY,
  FETCH_ERROR,
  FETCH_SUCCESS
} from "../constants"
import axios from '../util/Api'

export const getAllCategories = () => {
  return (dispatch) => {
    return axios.get('categories/').then(({data}) => {
      if (data) {
        dispatch({type: GET_ALL_CATEGORIES, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const storeCategory = (formData) => {
  return (dispatch) => {
    return axios.post(`categories/`, formData).then(({data}) => {
      if (data) {
        dispatch({type: GET_SELECTED_CATEGORY, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const updateCategory = (category_id, formData) => {
  return (dispatch) => {
    return axios.patch(`categories/${category_id}`, formData).then(({data}) => {
      if (data) {
        dispatch({type: GET_SELECTED_CATEGORY, payload: data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const deleteCategory = (category_id) => {
  return (dispatch) => {
    return axios.delete(`categories/${category_id}`).then(({data}) => {
      if (data) {
        dispatch({type: FETCH_SUCCESS, payload: 'success delete'})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}