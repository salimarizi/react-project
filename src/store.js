import thunk from "redux-thunk"
import { 
  legacy_createStore as createStore,
  applyMiddleware
} from "redux";
import reducers from './reducers'

export default createStore(
  reducers,
  applyMiddleware(thunk)
)
