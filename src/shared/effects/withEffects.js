import { withEffects } from 'refract-rxjs'
import { withNamespacedContext } from 'shared/context'

import handler from './effectHandler'

export const withLocalEffects = (
	localHandler,
	localErrorHandler
) => aperture => BaseComponent =>
	withNamespacedContext()(
		withEffects(localHandler, localErrorHandler)(aperture)(BaseComponent)
	)

export const withGlobalEffects = aperture => BaseComponent =>
	withNamespacedContext()(withEffects(handler)(aperture)(BaseComponent))
