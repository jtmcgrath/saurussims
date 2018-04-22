import withLifecycle from './withLifecycle'

const withEventListener = (eventName, callbackName) =>
	withLifecycle({
		didMount: ({ [callbackName]: callback }) =>
			window.addEventListener(eventName, callback),
		willUnmount: ({ [callbackName]: callback }) =>
			window.removeEventListener(eventName, callback),
	})

export default withEventListener
