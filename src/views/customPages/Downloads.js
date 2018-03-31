import React, { Fragment } from 'react'

import { Link, Page } from 'components'

const Downloads = () => (
	<Page>
		{({ styles }) => (
			<Fragment>
				<header className={styles.header}>
					<h1>Downloads</h1>
					<h3>Under construction</h3>
				</header>
				<p>
					<Link routeName="tag" routeParams={{ tagName: 'downloads' }}>
						For now, please click here to view the <strong>downloads</strong>{' '}
						tag instead!
					</Link>
				</p>
			</Fragment>
		)}
	</Page>
)

export default Downloads
