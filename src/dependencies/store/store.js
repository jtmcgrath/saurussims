import { combineReducers, compose, createStore } from 'redux'
import { refractEnhancer } from 'refract-redux-rxjs'
import { composeWithDevTools } from 'redux-devtools-extension'

import tumblr from './tumblr'

export const configureStore = () => {
	const enhancers = [refractEnhancer()]

	const composedEnhancers =
		process.env.NODE_ENV === 'production'
			? compose(...enhancers)
			: composeWithDevTools(...enhancers)

	return createStore(
		combineReducers({
			tumblr,
		}),
		{},
		composedEnhancers
	)
}
