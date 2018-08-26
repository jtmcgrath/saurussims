const reqConfigs = require.context('../', true, /\.configureApp\.js$/)
export const configs = reqConfigs.keys().map(reqConfigs)

const reqProcess = require.context('./', true, /\.postProcess\.js$/)
export const process = reqProcess.keys().map(reqProcess)
