import { createElement } from 'react'

import { get } from 'utils/general'

const withConfig = (...targets) => BaseComponent => {
	let config = window.config || {}

	config = targets
		? targets.reduce((acc, curr) => {
				const paths = curr.split('.')

				return paths.length > 1
					? {
							...acc,
							[paths[paths.length - 1]]: get(config, curr),
						}
					: {
							...acc,
							[curr]: get(config, curr),
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
