import content from './content'
import error from './error'
import loading from './loading'
import nav from './nav'

export default function createLayouts(contentRoot, navRoot, app) {
	return {
		renderContent: content(contentRoot, app),
		renderError: error(contentRoot),
		renderLoading: loading(contentRoot),
		renderNav: nav(navRoot, app),
	}
}
