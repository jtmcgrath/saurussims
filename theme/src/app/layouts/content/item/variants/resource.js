export default function renderResource({ image, link, title }) {
    return `
        <div class="item resource">
            <a href="${link}" class="item-link">
                ${image ? `<img src="${image}" alt="${name}" />` : ''}
                <h1>${title}</h1>
            </a>
        </div>
    `
}
