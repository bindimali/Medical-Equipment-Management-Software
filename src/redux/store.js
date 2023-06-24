import {createStore, combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import {applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import reducer1 from "./reducer/reducer1"

const rootReducer=combineReducers({
    reducer1:reducer1
})

export const store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)