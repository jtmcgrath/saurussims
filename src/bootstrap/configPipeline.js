import * as variants from './variants'

const createField = ({ type, ...settings }) => variants[type](settings)
const required = true

const configPipeline = [
	createField({ name: 'appComponent', type: 'value', required }),
	createField({ name: 'defaultRoute', type: 'value', required }),
	createField({ name: 'dependencies', type: 'object' }),
	createField({ name: 'routeComponents', type: 'object', required }),
	createField({
		name: 'routes',
		type: 'array',
		preventDuplicates: x => y => x.name === y.name,
		required,
	}),
]

export default configPipeline
