document.addEventListener('DOMContentLoaded', () => {
	if (!window.saurussimsHasLoaded) {
		window.saurussimsHasLoaded = true
		const root = document.querySelector('article.permalink-page')

		root.innerHTML = 'Hello, world!'
	}
})
