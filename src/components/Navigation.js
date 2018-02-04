import React from 'react'
import { Link } from 'react-router5'

import { List } from 'components'

const Navigation = props => (
	<nav>
		<List>
			<a>Menu</a>
			<Link routeName="ask">Ask</Link>
			<a>Follow</a>
			<a>Random</a>
			<Link routeName="all">Home</Link>
		</List>
		<List>
			<a>Downloads</a>
			<Link routeName="tag" routeParams={{ tagName: 'lookbook' }}>
				Lookbooks
			</Link>
			<a>Sims</a>
			<Link routeName="tag" routeParams={{ tagName: 'wcif' }}>
				WCIF
			</Link>
		</List>
	</nav>
)

export default Navigation
