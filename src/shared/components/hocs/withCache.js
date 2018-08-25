import withState from 'react-state-hoc'
import {
	distinctUntilChanged,
	filter,
	map,
	mergeMap,
	skip,
	take,
} from 'rxjs/operators'
import { from, merge } from 'rxjs'

import { compose } from 'shared/utils'
import { withEffects, toLocalCallback } from 'shared/effects'

const reduceProps = (props, values) =>
	props.reduce(
		(state, prop) => ({
			...state,
			[prop]: values[prop] || null,
		}),
		{ showRefresh: false }
	)

const withCache = (...cachedProps) => BaseComponent => {
	if (cachedProps.includes('showRefresh')) {
		throw new Error(
			'Error in withCache HoC: reserved prop `showRefresh` can not be cached.'
		)
	}
	if (!cachedProps.length) return BaseComponent

	const WithCache = compose(
		withState(
			values => reduceProps(cachedProps, values),
			() => setState => ({
				reset: values => setState(reduceProps(cachedProps, values)),
				setValue: ({ prop, value }) => setState({ [prop]: value }),
				setShowRefresh: () => setState({ showRefresh: true }),
			}),
			(props = {}, state, { reset, ...stateCreators }) => ({
				...props,
				...state,
				...stateCreators,
				allProps: props,
				reset: () => reset(props),
			})
		),
		withEffects(() => component => {
			const sourceProps$ = component.observe('allProps')

			const observeProp = prop => {
				const propValue$ = sourceProps$.pipe(
					map(props => props[prop]),
					filter(Boolean),
					distinctUntilChanged()
				)

				const firstValue$ = propValue$.pipe(
					take(1),
					map(value => ({ prop, value })),
					map(toLocalCallback('setValue'))
				)

				const newValue$ = propValue$.pipe(
					skip(1),
					map(toLocalCallback('setShowRefresh'))
				)

				return merge(firstValue$, newValue$)
			}

			return from(cachedProps).pipe(mergeMap(prop => observeProp(prop)))
		})
	)(BaseComponent)

	const baseName = BaseComponent.displayName || BaseComponent.name

	WithCache.displayName = `WithCache(${baseName})`

	return WithCache
}

export default withCache
