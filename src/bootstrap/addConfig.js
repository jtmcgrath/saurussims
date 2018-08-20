import { compose } from 'shared/utils'
import { configPipeline } from './bootstrapConfig'

const addConfig = (acc, config) =>
	compose(...configPipeline.map(configSection => configSection(config)))(acc)

export default addConfig
