import createRoot from '../createRoot'
import { createContentLayout } from '../layouts'

export default function buildLocalApp({ app }, target) {
	const root = createRoot(target, 'contentful-main')

	const renderContent = createContentLayout(root, app)

	renderContent({}, app)
}
