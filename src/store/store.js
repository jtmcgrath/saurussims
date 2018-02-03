import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { router5Middleware, router5Reducer } from 'redux-router5'

import tumblr from './tumblr'

export default function configureStore(
	router,
	initialState = window.__INITIAL_STATE__ || {},
) {
	let middleware = [router5Middleware(router), thunkMiddleware]

	if (process.env.NODE_ENV !== 'production') {
		const composeEnhancers =
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

		middleware = composeEnhancers(applyMiddleware(...middleware))
	} else {
		middleware = applyMiddleware(...middleware)
	}

	const store = createStore(
		combineReducers({
			router: router5Reducer,
			tumblr,
		}),
		initialState,
		middleware,
	)

	return store
}
