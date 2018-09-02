export const invert = initial =>
	({
		bottom: 'top',
		left: 'right',
		right: 'left',
		top: 'bottom',
	}[initial])

const spreadStyles = type => (...args) => `
	${type}-top: ${args[0]};
	${type}-right: ${args[1] || args[0]};
	${type}-bottom: ${args[2] || args[0]};
	${type}-left: ${args[3] || args[1] || args[0]};
`

export const margin = spreadStyles('margin')
export const padding = spreadStyles('padding')
