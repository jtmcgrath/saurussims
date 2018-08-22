export const LOCAL_CALLBACK = 'LOCAL_CALLBACK'
export const toLocalCallback = propToCall => payload => ({
	type: LOCAL_CALLBACK,
	payload: {
		payload,
		propToCall,
	},
})

export const ROUTER = 'ROUTER'
export const toRouter = payload => ({
	type: ROUTER,
	payload,
})
