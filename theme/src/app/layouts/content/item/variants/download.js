export default function renderDownload({ image, link, title, tags }) {
	return `
        <div class="item download ${tags.join(' ')}">
            <a href="${link}" class="item-link">
                ${image ? `<img src="${image}" alt="${title}" />` : ''}
                <h1>${title}</h1>
            </a>
        </div>
    `
}
