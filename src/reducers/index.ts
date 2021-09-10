import { applyMiddleware,combineReducers,createStore,Middleware } from "redux";
import bankReducer from "./bankReducer"
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";

const middlewareList:Middleware[] =[thunk];
middlewareList.push(createLogger());

const reducers = combineReducers({
    bank: bankReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>

export const store = createStore(reducers,applyMiddleware(...middlewareList))