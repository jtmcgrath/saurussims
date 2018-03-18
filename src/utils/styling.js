export const borderRadius = (...args) => ({
	borderTopLeftRadius: args[0],
	borderTopRightRadius: args[1] || args[0],
	borderBottomRightRadius: args[2] || args[0],
	borderBottomLeftRadius: args[3] || args[1] || args[0],
})
