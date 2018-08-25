import { configureImageCache } from './imageCache'

const imagesConfig = app => {
	app.addDependencies({
		imageCache: config => configureImageCache(config),
	})
	app.addRequiredKey('dependencies.imageCache')
}

export default imagesConfig
