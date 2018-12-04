import React from 'react'

interface RenderStringProps {
	element?: 'img' | 'a'
	asProp?: string
	props?: object
}

const renderStringComponent = <Props extends {}>(
	displayName: string,
	renderString?: (props: Props) => string
) => {
	const Component: React.SFC<Props & RenderStringProps> = props => {
		const string = renderString ? renderString(props) : `{${displayName}}`

		if (!props.element) {
			return <>{string}</>
		}

		const asProp = props.asProp || (props.element === 'img' ? 'src' : null)

		return React.createElement(
			props.element,
			props.element && asProp
				? {
						children: props.children,
						...props.props,
						[asProp]: string,
				  }
				: {
						children: string,
				  }
		)
	}

	Component.displayName = displayName

	return Component
}

export default renderStringComponent
