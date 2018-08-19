import { compose } from 'shared/utils'
import buildPipeline from './buildPipeline'

const addConfig = configOutline => (acc, config) =>
	compose(...buildPipeline(configOutline).map(builder => builder(config)))(
		acc
	)

export default addConfig
