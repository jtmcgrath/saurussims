export default function renderResource({ color, image, link, title, tags = [] }) {
    return `
        <div class="item resource ${tags.join(' ')}">
            <a href="${link}" class="item-link" ${color ? ` style="background: ${color}"` : ''}>
                ${image ? `<img src="${image}" alt="${title}" />` : ''}
                <h1>${title}</h1>
            </a>
        </div>
    `
}
