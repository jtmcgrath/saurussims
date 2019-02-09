import renderFilter from './filter'
import renderLink from './link'

function renderItem(paths, keys) {
	return ({ icon, label, flat, filters }, i) => {
		const key = keys.length ? `${keys}.${i}` : `${i}`
		const className = flat ? ' flat' : undefined

		return filters
			? renderItems(paths, label, filters, key, icon, className)
			: renderFilter(paths, label, key, icon)
	}
}

export default function renderItems(
	paths,
	label,
	filters,
	keys = '',
	icon,
	className = ''
) {
	return `
        <li class="filter-group">
            ${label ? renderLink(paths, label, keys, icon) : ''}
            <ul class="filter-list${className}">
                ${filters.map(renderItem(paths, keys)).join('')}
            </ul>
        </li>
`
}
