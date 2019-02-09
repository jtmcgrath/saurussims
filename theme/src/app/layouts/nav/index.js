import renderIcon from './icon'
import renderItems from './items'
import renderToggles from './toggles'

export default function renderNav(root, { filters, toggles = [], tou }) {
	return ({ paths, ...state }) => {
		const touLink = tou
			? `
            <a class="tou-link" href="/tou">
                ${renderIcon('info')}
                TOU
            </a>
`
			: ''

		const template = `
            <a class="nav-toggle${
				tou ? ' active-padding' : ''
			}" data-toggle="nav-active">
                ${renderIcon('tasks')}
                Filters
            </a>
            ${touLink}
            <ul class="filter-root filter-list">
                ${renderToggles(toggles, state)}
                ${renderItems(paths, '', filters)}
            </ul>
`

		root.innerHTML = template
	}
}
