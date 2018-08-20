import { compose } from 'shared/utils'
import configPipeline from './configPipeline'

const addConfig = (acc, config) =>
	compose(...configPipeline.map(field => field(config)))(acc)

export default addConfig
