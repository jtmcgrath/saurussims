export default function renderResource({ image, link, title, tags }) {
    return `
        <div class="item resource ${tags.join(' ')}">
            <a href="${link}" class="item-link">
                ${image ? `<img src="${image}" alt="${name}" />` : ''}
                <h1>${title}</h1>
            </a>
        </div>
    `
}
