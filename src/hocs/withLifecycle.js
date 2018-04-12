import React, { PureComponent } from 'react'

const withLifecycle = config => BaseComponent => {
	if (!config) return BaseComponent

	class WithLifecycle extends PureComponent {
		// Note: will extend with further lifecycle methods only when needed
		componentWillMount() {
			config.willMount && config.willMount(this.props)
		}

		componentDidMount() {
			config.didMount && config.didMount(this.props)
		}

		componentWillUnmount() {
			config.willUnmount && config.willUnmount(this.props)
		}

		render() {
			return <BaseComponent {...this.props} />
		}
	}

	const baseName = BaseComponent.displayName || BaseComponent.name

	WithLifecycle.displayName = `withLifecycle(${baseName})`

	return WithLifecycle
}

export default withLifecycle
