import renderItem from './item'

export default function renderContent(root, app) {
	return (state, data) => {
		const template = data.items.length
			? `
                <div class="item-list">
                    ${data.items.map(renderItem).join('')}
                </div>
                <!-- render pagination here -->
            `
			: `
                <div class="error-message">
                    <p>No items found!</p>
                </div>
            `

		root.innerHTML = template
	}
}
