const renderIcon = icon => (icon ? `<span class="fas fa-${icon}"></span>` : '')

const renderLink = (paths, label, keys, icons) => `
    <a class="filter-link${
		paths.includes(keys)
			? ' active'
			: `" data-type="tags" data-value="${keys}`
	}">
        ${renderIcon(icon)}
        ${label}
    </a>
`

const renderFilter = (paths, label, keys, icon) => `
    <li class="filter-item">
        ${renderLink(paths, label, keys, icon)}
    </li>
`

const renderItem = (paths, keys) => ({ icon, label, flat, filters }, i) => {
	const key = keys.length ? `${keys}.${i}` : `${i}`
	const className = flat ? ' flat' : undefined

	return filters
		? renderGroup(paths, label, filters, key, icon, className)
		: renderFilter(paths, label, key, icon)
}

const renderGroup = (
	paths,
	label,
	filters,
	keys = '',
	icon,
	className = ''
) => `
    <li class="filter-group">
        ${label ? renderLink(paths, label, keys, icon) : ''}
        <ul class="filter-list${className}">
            ${filters.map(renderItem(paths, keys)).join('')}
        </ul>
    </li>
`

export default function renderNav(root, { filterByDownloads, filters }) {
	return ({ download, paths }) => {
		const navToggle = `
            <a class="nav-toggle" data-toggle="nav-active">
                ${renderIcon('tasks')}
                Filters
            </a>
`

		const downloadsToggle = filterByDownloads
			? `
            <li class="filter-list">
                <a class="filter-link${
					download ? 'active' : ''
				}" data-type="download" data-value="${!download}">
                    ${renderIcon('download')}
                    Download
                </a>
            </li>
`
			: ''

		const template = `
            ${navToggle}
            <ul class="filter-root filter-list">
                ${downloadsToggle}
                ${renderGroup(paths, '', filters)}
            </ul>

`

		root.innerHTML = template
	}
}
