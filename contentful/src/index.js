import buildApp from './app'
import createConfig from './config'

document.addEventListener('DOMContentLoaded', () => {
	if (!window.saurussimsHasLoaded) {
		window.saurussimsHasLoaded = true
        const root = document.querySelector('article.permalink-page')

        const config = createConfig(root)

        if (config) {
            buildApp(root, config)
        }
	}
})
