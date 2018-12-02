import React from 'react'

const renderPropsToString = (obj: {}) =>
	Object.entries(obj).reduce(
		(str, [key, val]) =>
			key === 'children' ? str : `${str} ${key}="${val}"`,
		''
	)

const renderBlockComponent = <Props extends {}>(displayName: string) => {
	const Component: React.SFC<Props> = props => (
		<>
			{`
			{block:${displayName}${renderPropsToString(props)}}
			`}
			{props.children}
			{`
			{/block:${displayName}}
			`}
		</>
	)

	Component.displayName = `${displayName}Block`

	return Component
}

export default renderBlockComponent
