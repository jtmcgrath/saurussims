const renderIcon = icon => (icon ? `<span class="fas fa-${icon}"></span>` : '')

const renderLink = (paths, label, keys, icon) => `
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

const toggleIcons = {
	download: 'download',
	imgur: 'image',
}

const toggleNames = {
	download: 'Download',
	imgur: 'Imgur',
}

const renderToggles = (...toggles) => {
	const itemsToRender = toggles.reduce((acc, [type, isActive, render]) => {
		if (render) {
			const toggle = `
                <a class="filter-link${
					isActive ? 'active' : ''
				}" data-type="${type}" data-value="${!isActive}">
                    ${renderIcon(toggleIcons[type])}
                    ${toggleNames[type]}
                </a>
            `
			acc.push(toggle)
		}

		return acc
	}, [])

	return itemsToRender.length
		? `
        <li class="filter-list flat">
            ${itemsToRender.join('')}
        </li>
    `
		: ''
}

export default function renderNav(
	root,
	{ filterByDownloads, filterByImgur, filters }
) {
	return ({ download, imgur, paths }) => {
		const navToggle = `
            <a class="nav-toggle" data-toggle="nav-active">
                ${renderIcon('tasks')}
                Filters
            </a>
`

		const toggles = renderToggles(
			['download', download, filterByDownloads],
			['imgur', imgur, filterByImgur]
		)

		const template = `
            ${navToggle}
            <ul class="filter-root filter-list">
                ${toggles}
                ${renderGroup(paths, '', filters)}
            </ul>

`

		root.innerHTML = template
	}
}
