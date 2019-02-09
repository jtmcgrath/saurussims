import renderIcon from './icon'

export default function renderLink(paths, label, keys, icon) {
	return `
        <a class="filter-link${
			paths.includes(keys)
				? ' active'
				: `" data-type="tags" data-value="${keys}"`
		}">
            ${renderIcon(icon)}
            ${label}
        </a>
`
}
