import React from 'react'

interface ToggleProps {
	is: 'visible' | 'hidden'
}

const renderPropsToString = (obj: {}) =>
	Object.entries(obj).reduce(
		(str, [key, val]) =>
			key === 'children' || key === 'is' ? str : `${str} ${key}="${val}"`,
		''
	)

const renderBlockComponent = <Props extends {}>(displayName: string) => {
	const Component: React.SFC<Props & ToggleProps> = props => {
		const blockName =
			props.is === 'visible' ? `Show${displayName}` : `Hide${displayName}`

		return (
			<>
				{`
{block:${blockName}${renderPropsToString(props)}}
`}
				{props.children}
				{`
{/block:${blockName}}
`}
			</>
		)
	}

	Component.displayName = `If${displayName}Block`

	return Component
}

export default renderBlockComponent
