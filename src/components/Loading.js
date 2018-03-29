import React from 'react'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'

const Loading = ({ styles }) => <div className={styles.loading} />

const styles = {
	loading: ({ columnSpacing }) => ({
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		margin: `${columnSpacing * 5}px 0`,
		overflow: 'visible',
		width: '100%',
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

export default compose(withConfig('columnSpacing'), connectStyles(styles))(
	Loading,
)
