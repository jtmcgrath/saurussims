export default function renderLoading(root) {
	return () => {
		const template = `
            <div class="spinner" />
        `

		root.innerHTML = template
	}
}
