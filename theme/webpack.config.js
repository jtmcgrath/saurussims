const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

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
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'output'),
	},
}
