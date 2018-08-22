const createTheme = (...theme) =>
	theme.reduce((acc, item) => ({ ...acc, ...item }), {})

export default createTheme
