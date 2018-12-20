import content from './content'
import error from './error'
import loading from './loading'

export default function createLayouts(contentRoot, navRoot, app) {
	return {
		renderContent: content(contentRoot, app),
		renderError: error(contentRoot),
		renderLoading: loading(contentRoot),
	}
}
