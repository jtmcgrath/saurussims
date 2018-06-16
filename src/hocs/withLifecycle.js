import React, { PureComponent } from 'react'

// Safe call function which won't execute fn if fn is undefined
const call = (fn, ...args) => fn && fn(...args)

const withLifecycle = config => BaseComponent => {
	if (!config) return BaseComponent

	class WithLifecycle extends PureComponent {
		// Note: will extend with further lifecycle methods only when needed
		constructor(props) {
			super(props)

			this.staticProps = call(config.inConstructor, props) || false
		}

		componentWillMount() {
			call(config.willMount, this.props)
		}

		componentDidMount() {
			call(config.didMount, this.props)
		}

		componentDidUpdate(prevProps) {
			call(config.didUpdate, this.props, prevProps)
		}

		componentWillUnmount() {
			call(config.willUnmount, this.props)
		}

		render() {
			return <BaseComponent {...this.props} {...this.staticProps} />
		}
	}

	const baseName = BaseComponent.displayName || BaseComponent.name

	WithLifecycle.displayName = `withLifecycle(${baseName})`

	return WithLifecycle
}

export default withLifecycle
