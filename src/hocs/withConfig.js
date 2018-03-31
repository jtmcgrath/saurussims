import { createElement } from 'react'

import { get } from 'utils/general'

const withConfig = (...targets) => BaseComponent => {
	let config = window.config || {}

	config = targets
		? targets.reduce((acc, curr) => {
				const paths = curr.split('.')
				const key = paths.length > 1 ? paths[paths.length - 1] : curr

				return {
					...acc,
					[key]: get(config, curr),
				}
			}, {})
		: { config }

	const WithConfig = props =>
		createElement(BaseComponent, { ...config, ...props })

	const baseName = BaseComponent.displayName || BaseComponent.name

	WithConfig.displayName = `withConfig(${baseName})`

	return WithConfig
}

export default withConfig
