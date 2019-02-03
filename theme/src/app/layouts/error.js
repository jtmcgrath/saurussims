export default function renderError(root) {
	return (...errorDetails) => {
		console.log(...errorDetails)
		const template = `
            <div class="error-message">
                <p>Something went wrong!</p>
            </div>
        `

		root.innerHTML = template
	}
}
