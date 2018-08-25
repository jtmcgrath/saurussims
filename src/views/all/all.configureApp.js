import All from './components/All'

const allConfig = app => {
	app.addRouteComponents({
		all: All,
	})
	app.addRoutes([
		{
			name: 'all',
			path: '/',
			children: [
				{ name: 'index', path: 'page/1', forwardTo: 'all' },
				{
					name: 'page',
					path: 'page/:pageId',
				},
			],
		},
	])
}

export default allConfig
