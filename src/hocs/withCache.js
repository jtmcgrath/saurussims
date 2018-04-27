import withState from 'react-state-hoc'

import { capitalize, compose, deepEquals } from 'utils/general'
import { withLifecycle } from 'hocs'

const reduceProps = (props, values) =>
	props.reduce(
		(state, prop) => ({
			...state,
			[`cached${capitalize(prop)}`]: values[prop] || null,
		}),
		{},
	)

const withCache = (...props) => BaseComponent => {
	if (!props.length) return BaseComponent

	const WithCache = compose(
		withState(values => reduceProps(props, values)),
		withLifecycle({
			inConstructor: ({ setState, ...values }) => {
				setState(reduceProps(props, values))

				return {
					refresh: () =>
						setState({
							// Reset all chosen props to null and showRefresh
							// to false
							...props.reduce(
								(acc, prop) => ({
									...acc,
									[`cached${capitalize(prop)}`]: null,
								}),
								{},
							),
							showRefresh: false,
						}),
				}
			},
			didUpdate: ({ setState, ...nextProps }, prevProps) => {
				setState(({ showRefresh }) => ({
					// Spread any props which have changed from null -> value,
					// i.e. anything returned fresh from an API call which was
					// not previously cached.
					...props.reduce(
						(acc, prop) =>
							prevProps[prop] && nextProps[`cached${capitalize(prop)}`] !== null
								? acc
								: { ...acc, [`cached${capitalize(prop)}`]: nextProps[prop] },
						{},
					),
					// Show the button to trigger a refresh if any of the
					// chosen props are changed. If showRefresh is already true,
					// do not allow it to change back to false in this call.
					showRefresh:
						showRefresh ||
						props.some(
							prop =>
								prevProps[prop] &&
								!deepEquals(nextProps[prop], prevProps[prop]),
						),
				}))
			},
		}),
	)(BaseComponent)

	const baseName = BaseComponent.displayName || BaseComponent.name

	WithCache.displayName = `withCache(${baseName})`

	return WithCache
}

export default withCache
