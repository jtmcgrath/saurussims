import PrintProps from 'shared/printProps'

const postConfig = app => {
	app.addRouteComponents({
		post: PrintProps,
	})
	app.addRoutes([
		{
			name: 'post',
			path: '/post/:postId/:postSLug',
		},
		{
			name: 'postWithoutSlug',
			path: '/post/:postId',
		},
	])
}

export default postConfig
