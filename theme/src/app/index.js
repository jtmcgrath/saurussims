import createRoot from './createRoot'
import createLayouts from './layouts'

const requestState = ['download', 'imgur', 'page', 'tags']

const getClosestTarget = element =>
	element &&
	(element.tagName === 'A'
		? element
		: getClosestTarget(element.parentElement))

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

	const handleClick = ({ target }) => {
		const link = getClosestTarget(target)
		const { toggle, type, value } = link.dataset

		if (type && value) {
			store.set(type, value)

			if (requestState.includes(type)) {
				requestData()
			} else {
				const state = store.get()
				renderNav(state)
			}
		} else if (toggle) {
			if (toggle === 'nav-active') {
				nav.classList.toggle('active')
			}
		}
	}

	root.addEventListener('click', handleClick)
	nav.addEventListener('click', handleClick)

	requestData()
}
