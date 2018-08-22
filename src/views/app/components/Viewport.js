import { withState } from 'react-state-hoc'
import { fromEvent, merge } from 'rxjs'
import { map } from 'rxjs/operators'

import { withLocalEffects } from 'shared/effects'
import { compose } from 'shared/utils'

const transform = i => i

const Viewport = ({ children, viewport }) => children(transform(viewport))

export default compose(
	withState({ viewport: {} }),
	withLocalEffects(
		({
			columnSpacing,
			columnWidth,
			maxColumns,
			setState,
		}) => innerWidth => {
			const allColumns =
				Math.floor(innerWidth / (columnWidth + columnSpacing)) || 1
			const columnCount =
				allColumns > maxColumns ? maxColumns : allColumns
			const isDesktop = columnCount > 2
			setState({ viewport: { columnCount, innerWidth, isDesktop } })
		}
	)(() => () =>
		merge(fromEvent(window, 'load'), fromEvent(window, 'resize')).pipe(
			map(event => event.currentTarget.innerWidth)
		)
	)
)(Viewport)
