export default function renderContent(root, app) {
	return (state, data) => {
		const template = data.items.length
			? `
                <div class="item-list">
                    <!-- render items here -->
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
