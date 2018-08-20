import * as variants from './variants'

const required = true

export const configSections = [
	{ name: 'appComponent', type: 'value', required },
	{ name: 'defaultRoute', type: 'value', required },
	{ name: 'dependencies', type: 'object' },
	{ name: 'routeComponents', type: 'object', required },
	{
		name: 'routes',
		type: 'array',
		preventDuplicates: x => y => x.name === y.name,
		required,
	},
]

export const configPipeline = configSections.map(({ type, ...settings }) =>
	variants[type](settings)
)
