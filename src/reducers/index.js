import { combineReducers } from 'redux'
import AuthReducer from './Auth'
import ProductReducer from './Product'
import CategoryReducer from './Category'
import TransactionReducer from './Transaction'

const reducer = combineReducers({
  AuthReducer,
  ProductReducer,
  CategoryReducer,
  TransactionReducer
  // nantinya akan berisi kumpulan reducer
})

export default reducer
