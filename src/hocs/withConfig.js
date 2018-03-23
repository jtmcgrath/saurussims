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

	const withConfig = props =>
		createElement(BaseComponent, { ...config, ...props })

	const baseName = BaseComponent.displayName || BaseComponent.name

	withConfig.displayName = `withConfig(${baseName})`

	return withConfig
}

export default withConfig
