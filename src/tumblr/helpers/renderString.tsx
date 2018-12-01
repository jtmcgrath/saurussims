import React from 'react'

const renderStringComponent = <Props extends {}>(
	displayName: string,
	renderString: (props: Props) => string
) => {
	const Component: React.SFC<Props> = (props: Props) => (
		<>{renderString(props)}</>
	)

	Component.displayName = displayName

	return Component
}

export default renderStringComponent
