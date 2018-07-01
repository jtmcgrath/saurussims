import React, { Fragment } from 'react'

import { Link, Page } from 'components'

export default ({ title = 'Not Found!' }) => (
	<Page>
		{({ styles }) => (
			<Fragment>
				<header className={styles.header}>
					<h1>{title}</h1>
				</header>
				<p>
					<Link routeName="all">
						There doesn't seem to be anything here! Click your back button to go
						back a page, or click here to return to home.
					</Link>
				</p>
			</Fragment>
		)}
	</Page>
)
