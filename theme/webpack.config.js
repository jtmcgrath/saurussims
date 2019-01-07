const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const getArg = (name, fallback) => {
	const value = process.argv.find(arg => arg.startsWith(name))

	return value ? value.slice(name.length + 1) : fallback
}

const section = getArg('--section', 'sims')

const layouts = {
	default: 'contentful',
	photoset: 'photoset',
}

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.join(__dirname, 'output'),
		filename: 'main.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'output/index.html'),
			inject: false,
			layout: layouts[section] || layouts.default,
			section,
			sectionTitle: capitalize(section),
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'output'),
	},
}
