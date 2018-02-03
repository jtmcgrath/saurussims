import scrollToTop from 'vendor/scrollTo'

const onRouteActivateMiddleware = routes => (router, dependencies) => (
	toState,
	fromState,
	done,
) => {
	const routeSegment = routes.find(r => r.name === toState.name)

	if (routeSegment && routeSegment.onActivate) {
		const action = routeSegment.onActivate(
			dependencies.store.getState(),
			toState.params,
		)

		if (action) {
			dependencies.store.dispatch(action)
		}
	}

	if (routeSegment && !routeSegment.forwardTo) {
		scrollToTop()
	}

	done()
}

export default onRouteActivateMiddleware
