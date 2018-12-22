import createRoot from './createRoot'
import createLayouts from './layouts'

export default function buildApp(target, header, { api, app, store }) {
	const root = createRoot(target, 'contentful-main')
	const nav = createRoot(header, 'contentful-nav')

	const {
		renderContent,
		renderError,
		renderLoading,
		renderNav,
	} = createLayouts(root, nav, app)

	const requestData = () => {
		const state = store.get()

		renderNav(state)
		renderLoading()

		api.fetch(state)
			.then(res => renderContent(state, res))
			.catch(err => renderError(state, err))
	}

	requestData()
}
