import createRoot from './createRoot'
import createLayouts from './layouts'

export default function buildApp(target, header, { api, app }) {
	const root = createRoot(target, 'contentful-main')
	const nav = createRoot(header, 'contentful-nav')

	const { renderLoading } = createLayouts(root, nav, app)

	renderLoading()
}
