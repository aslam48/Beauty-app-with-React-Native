import {combineReducers, conbineReducers} from "redux"
import feedReducer from "./feedReducer"

const myReducer = combineReducers({
    feeds: feedReducer
})

export default myReducer