import React, { PureComponent } from 'react'

const withLifecycle = config => BaseComponent => {
	if (!config) return BaseComponent

	class withLifecycle extends PureComponent {
		// Note: will extend with further lifecycle methods only when needed
		componentDidMount() {
			config.didMount(this.props)
		}

		componentWillUnmount() {
			config.willUnmount(this.props)
		}

		render() {
			return <BaseComponent {...this.props} />
		}
	}

	const baseName = BaseComponent.displayName || BaseComponent.name

	withLifecycle.displayName = `withLifecycle(${baseName})`

	return withLifecycle
}

export default withLifecycle
