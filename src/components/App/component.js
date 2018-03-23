import React from 'react'

import routeComponents from 'views'
import { Header, NotFound } from 'components'

const App = ({ isDesktop, route, styles }) => {
	const segment = route ? route.name.split('.')[0] : undefined

	const Content = routeComponents[segment] || NotFound

	return (
		<main className={styles.root}>
			<Header className={styles.header} isDesktop={isDesktop} />
			<div className={styles.content}>
				<Content />
			</div>
		</main>
	)
}

export default App
