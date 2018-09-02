import { withEffects } from 'refract-rxjs'
import { withContext } from 'shared/context'

import handler from './effectHandler'

export const withLocalEffects = (
	localHandler,
	localErrorHandler
) => aperture => BaseComponent =>
	withContext()(
		withEffects(localHandler, localErrorHandler)(aperture)(BaseComponent)
	)

export const withGlobalEffects = aperture => BaseComponent =>
	withContext()(withEffects(handler)(aperture)(BaseComponent))
