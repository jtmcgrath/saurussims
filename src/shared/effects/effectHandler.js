import { DISPATCH, LOCAL_CALLBACK, ROUTER } from './effectTypes'

const handlers = {
	[DISPATCH]: ({ store }) => payload => {
		store.dispatch(payload)
	},
	[LOCAL_CALLBACK]: props => ({ payload, propToCall }) => {
		props[propToCall](payload)
	},
	[ROUTER]: ({ router }) => ({ name, params, options }) => {
		router.navigate(name, params, options)
	},
	log: () => console.log
}

const handleEffect = props => {
	const finalHandlers = Object.keys(handlers).reduce(
		(all, key) => ({
			...all,
			[key]: handlers[key](props),
		}),
		{}
	)

	return ({ type, payload }) => finalHandlers[type](payload)
}

export default props => {
	const handle = handleEffect(props)

	return effects => [].concat(effects).forEach(handle)
}
