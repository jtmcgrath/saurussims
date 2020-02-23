import renderItem from './item'
import renderPagination from './pagination'

export default function renderContent(root, app) {
	return (state, data) => {
		const template = data.items.length
			? `
                <div class="item-list">
                    ${data.items.map(renderItem).join('')}
                </div>
                ${data.pagination ? renderPagination(data) : ''}
            `
			: `
                <div class="error-message">
                    <p>No items found!</p>
                </div>
            `

		root.innerHTML = template
	}
}
