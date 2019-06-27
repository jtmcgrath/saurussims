const renderDownload = download => `
				<a href="${download}">
					<svg
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
						<polyline points="7 10 12 15 17 10" />
						<line x1="12" y1="15" x2="12" y2="3" />
					</svg>
				</a>
`

const renderImgur = imgur => `
				<a href="${imgur}">
					<svg
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
						<circle cx="8.5" cy="8.5" r="1.5"></circle>
						<polyline points="21 15 16 10 5 21"></polyline>
					</svg>
				</a>
`

const renderIcons = (download, imgur) => `
			<div class="item-actions">
				${download ? renderDownload(download) : ''}
				${imgur ? renderImgur(imgur) : ''}
			</div>
`

export default function renderSim({ download, imgur, image, tagName, name }) {
	return `
        <div class="item sim">
            <a href="${
				window.location.origin
			}/tagged/${tagName}" class="item-link">
				${image ? `<img src="${image}" alt="${name}" />` : ''}
                <h1>${name}</h1>
            </a>
            ${download || imgur ? renderIcons(download, imgur) : ''}
        </div>
    `
}
