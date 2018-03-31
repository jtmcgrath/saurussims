import React from 'react'

import UnderConstruction from '../UnderConstruction'

const Sims = ({ styles }) => (
	<UnderConstruction
		linkProps={{
			routeName: 'tag',
			routeParams: { tagName: 'mysims' },
		}}
		route="Sims"
		tagName="mysims"
		styles={styles}
	/>
)

export default Sims
