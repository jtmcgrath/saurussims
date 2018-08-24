import bootstrap from './bootstrap'
import createApp from './createApp'

const req = require.context('../', true, /\.configureApp\.js$/)
const configs = req.keys().map(req)

export default bootstrap(createApp, configs)
