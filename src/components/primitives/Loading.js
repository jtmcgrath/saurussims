import React from 'react'
import classNames from 'classnames'
import { merge, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import { withEffects } from 'refract-rxjs'
import { connect as connectStyles } from 'react-fela'

import { Page } from 'components'
import { compose } from 'utils/general'
import { withConfig } from 'hocs'

const Loading = ({ styles }) => (
	<div className={classNames(styles.loading, styles.spinner)} />
)

const LoadingError = ({ columnWidth, styles }) => (
	<Page className={styles.loading} maxWidth={columnWidth}>
		<h1>Error: unable to load content</h1>
		&nbsp;
		<p>
			<strong>Sorry if this error keeps on happening!</strong>
		</p>
		<p>
			Tumblr puts a limit on the number of API requests you can make,
			which means that when too many people visit my page, Tumblr prevents
			&nbsp;
			<em>anyone</em> from seeing it.
		</p>
		<p>
			I&apos;m working on a new version of the theme which won&apos;t have this
			problem - until that&apos;s ready, please bookmark the page and try again
			later!
		</p>
	</Page>
)

const styles = {
	loading: ({ columnSpacing }) => ({
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: `${columnSpacing * 5}px 0`,
		overflow: 'visible',
		width: '100%',
	}),
	spinner: ({ columnSpacing }) => ({
		'::before': {
			animation: 'spin .7s linear infinite',
			border: '2px solid rgba(255,255,255,.1)',
			borderBottomColor: 'rgba(145, 145, 145, .8)',
			borderRadius: '50%',
			content: "''",
			display: 'block',
			height: '10vw',
			maxHeight: `${columnSpacing * 6}px`,
			maxWidth: `${columnSpacing * 6}px`,
			minHeight: `${columnSpacing}px`,
			minWidth: `${columnSpacing}px`,
			width: '10vw',
		},
	}),
}

const handler = () => () => {}

const aperture = props => component =>
	merge(
		of(<Loading {...props} />),
		component.mount.pipe(
			delay(5000),
			map(() => <LoadingError {...props} />)
		)
	)

export default compose(
	withConfig('columnSpacing', 'columnWidth'),
	connectStyles(styles),
	withEffects(handler)(aperture)
)()
