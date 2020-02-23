import createContentLayout from './content'
import createErrorLayout from './error'
import createLoadingLayout from './loading'
import createNavLayout from './nav'

export {
	createContentLayout,
	createErrorLayout,
	createLoadingLayout,
	createNavLayout,
}

export function createLayouts(contentRoot, navRoot, app) {
	return {
		renderContent: createContentLayout(contentRoot, app),
		renderError: createErrorLayout(contentRoot),
		renderLoading: createLoadingLayout(contentRoot),
		renderNav: createNavLayout(navRoot, app),
	}
}
