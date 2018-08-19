import * as allBuilders from './builders'

export const buildPipeline = builders => outline =>
	Object.entries(outline).reduce(
		(all, [name, settings]) => [
			...all,
			builders[settings.type](name, settings),
		],
		[]
	)

export default buildPipeline(allBuilders)
