import renderIcon from './icon'

const toggleIcons = {
	download: 'download',
	imgur: 'image',
}

const toggleNames = {
	download: 'Download',
	imgur: 'Imgur',
}

export default function renderToggles(toggles, state) {
	return toggles.length
		? `
        <li class="filter-list flat">
            ${toggles
				.map(
					type => `
            <a class="filter-link${
				state[type] ? ' active' : ''
			}" data-type="${type}" data-value="${!state[type]}">
                ${renderIcon(toggleIcons[type])}
                ${toggleNames[type]}
            </a>
`
				)
				.join('')}
        </li>
`
		: ''
}
