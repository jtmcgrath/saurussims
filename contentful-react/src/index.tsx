import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import createConfig from './config'
import variables from './variables'

const root = document.querySelector('article.permalink-page')

createConfig(root, variables).then(config => {
	if (config) {
		ReactDOM.render(<App {...config} />, root)
	}
})
