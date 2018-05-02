import React from 'react'

import routeComponents from 'views'
import { Header, NotFound } from 'components'
import { map } from 'router/routes'

const App = ({ isDesktop, route, styles }) => {
	const segment = route ? route.name.split('.')[0] : undefined

	const Content = routeComponents[segment] || NotFound

	return (
		<main className={styles.root}>
			<Header
				className={styles.header}
				isDesktop={isDesktop}
				showTerms={isDesktop && map[route.name].showTerms}
			/>
			<div className={styles.content}>
				<Content />
			</div>
		</main>
	)
}

export default App
