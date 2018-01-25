import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'

let middleware = [thunkMiddleware]
let createStoreArgs = [reducer]

if (process.env.NODE_ENV !== 'production') {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

	middleware = composeEnhancers(applyMiddleware(...middleware))
} else {
	middleware = applyMiddleware(...middleware)
}

if (window.__INITIAL_STATE__) {
	const initialState = window.__INITIAL_STATE__

	createStoreArgs = [...createStoreArgs, initialState]
}

const store = createStore(...createStoreArgs, middleware)

export default store
