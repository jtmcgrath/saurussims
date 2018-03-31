import React, { Fragment } from 'react'

import { Link, Page } from 'components'

const Sims = () => (
	<Page>
		{({ styles }) => (
			<Fragment>
				<header className={styles.header}>
					<h1>Sims</h1>
					<h3>Under construction</h3>
				</header>
				<p>
					<Link routeName="tag" routeParams={{ tagName: 'mysims' }}>
						For now, please click here to view the <strong>mysims</strong> tag
						instead!
					</Link>
				</p>
			</Fragment>
		)}
	</Page>
)

export default Sims
