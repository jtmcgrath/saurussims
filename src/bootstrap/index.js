import bootstrap from './bootstrap'
import createApp from './createApp'
import { configs, process } from './requireContexts'

export default bootstrap(createApp, configs, process)
