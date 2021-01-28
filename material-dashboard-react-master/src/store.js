import {createStore} from "redux"
import setAuth from "./reducers/jwtAuth"

const store = createStore(setAuth, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store