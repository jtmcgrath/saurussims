import React from 'react'

import UnderConstruction from '../UnderConstruction'

const Downloads = ({ styles }) => (
	<UnderConstruction
		linkProps={{
			routeName: 'tag',
			routeParams: { tagName: 'downloads' },
		}}
		route="Downloads"
		tagName="downloads"
		styles={styles}
	/>
)

export default Downloads
