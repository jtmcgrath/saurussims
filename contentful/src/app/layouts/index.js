import loading from './loading'

export default function createLayouts(contentRoot, navRoot, app) {
	return {
		renderLoading: loading(contentRoot),
	}
}
