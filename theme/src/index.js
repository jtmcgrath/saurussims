import './scripts'

import buildApp from './app'
import createConfig from './config'
import variables from './variables'

document.addEventListener('DOMContentLoaded', () => {
	if (!window.saurussimsHasLoaded) {
		window.saurussimsHasLoaded = true
		const header = document.querySelector('header.header')
		const root = document.querySelector('article.permalink-page')

		const config = createConfig(root, variables)

		if (config) {
			buildApp(root, header, config)
		}
	}
})
