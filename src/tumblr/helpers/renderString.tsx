import React from 'react'

const renderStringComponent = <Props extends {}>(
	displayName: string,
	renderString?: (props: Props) => string
) => {
	const Component: React.SFC<Props> = props => (
		<>{renderString ? renderString(props) : `{${displayName}}`}</>
	)

	Component.displayName = displayName

	return Component
}

export default renderStringComponent
