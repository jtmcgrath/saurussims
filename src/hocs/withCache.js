import React from 'react'
import withState from 'react-state-hoc'
import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'
import { padding } from 'polished'

import { Icon } from 'components'
import { borderRadius } from 'utils/styling'
import { capitalize, compose, deepEquals } from 'utils/general'
import { withLifecycle } from 'hocs'
import { isDesktop } from 'store'

const mapStateToProps = state => ({
	isDesktop: isDesktop(state),
})

const styles = {
	refresh: ({ isDesktop }) => ({
		...borderRadius('16px'),
		...padding(0, '12px', 0, '4px'),
		alignItems: 'center',
		background: 'rgba(255,255,255,.9)',
		bottom: isDesktop ? '12px' : '60px',
		display: 'flex',
		right: '12px',
		lineHeight: '32px',
		position: 'fixed',
		textDecoration: 'none',
		zIndex: 5,
	}),
}

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
		connect(mapStateToProps),
		connectStyles(styles),
		withState(values => reduceProps(props, values)),
		withLifecycle({
			inConstructor: ({ setState, styles, ...values }) => {
				setState(reduceProps(props, values))

				const refresh = () =>
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
					})

				return {
					refresh: (
						<a onClick={refresh} className={styles.refresh}>
							<Icon icon="Reblog" height="16" />
							&nbsp; New content found!
						</a>
					),
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
