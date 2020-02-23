export default function renderLink({ image, link, title }) {
    return `
        <div class="item link">
            <a href="${link}" class="item-link">
                ${image ? `<img src="${image}" alt="${title}" />` : ''}
                <h1>${title}</h1>
            </a>
        </div>
    `
}
