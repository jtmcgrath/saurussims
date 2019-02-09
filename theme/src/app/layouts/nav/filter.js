import renderLink from './link'

export default function renderFilter(paths, label, keys, icon) {
	return `
        <li class="filter-item">
            ${renderLink(paths, label, keys, icon)}
        </li>
`
}
