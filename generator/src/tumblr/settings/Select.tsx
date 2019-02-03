import React from 'react'

type OptionWithTitle = [string, string]
type Option = string | OptionWithTitle

interface SelectProps {
	name: string
	options: Option[]
}

const Select: React.SFC<SelectProps> = ({ name, options }) => {
	const selectName = `select:${name}`
	return (
		<>
			{options.map(option =>
				typeof option === 'string' ? (
					<meta name={selectName} content={option} title={option} />
				) : (
					<meta
						name={selectName}
						content={option[0]}
						title={option[1]}
					/>
				)
			)}
		</>
	)
}

export default Select
