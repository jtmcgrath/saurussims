import * as apps from './variants'

export default function buildApp(target, header, config) {
	apps[config.app.dataSource](config, target, header)
}
