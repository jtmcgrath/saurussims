export default function renderDownload({ image, link, title }) {
	return `
        <div class="item download">
            <a href="${link}" class="item-link">
                <img src="${image}" alt="${title}" />
                <h1>${title}</h1>
            </a>
        </div>
    `
}
