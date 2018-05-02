import React, { Fragment } from 'react'
import { connect as connectStyles } from 'react-fela'
import { margin } from 'polished'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'

const Terms = ({ styles }) => (
	<div className={styles.terms}>
		<p>
			<strong>TOU</strong>
		</p>
		<p>
			Feel free to recolour and you can even include the meshes, but please give
			credit and link back to this post ♥
		</p>
		<p>Don’t claim as your own, it’s rude!</p>
	</div>
)

const styles = {
	terms: ({ center, columnSpacing }) => ({
		...margin(`${columnSpacing}px`, 'auto', 0),
		color: '#919191',
		lineHeight: '1.4',
		maxWidth: '400px',
		textAlign: center ? 'center' : 'left',
	}),
}

export default compose(withConfig('columnSpacing'), connectStyles(styles))(
	Terms,
)
