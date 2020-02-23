import createRoot from '../createRoot'
import { createLayouts } from '../layouts'
import { getClosestTarget } from '../../utils'

const requestState = ['download', 'imgur', 'page', 'tags']

export default function buildContentfulApp({ api, app, store }, target, header) {
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
