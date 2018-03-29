import React from 'react'
import { connect as connectStyles } from 'react-fela'

import { Link } from 'components'
import { withConfig } from 'hocs'
import { compose } from 'utils/general'
import { listItem, listItemPadding } from 'utils/styling'

const Downloads = ({ styles }) => (
	<div className={styles.wrapper}>
		<div className={styles.downloads}>
			<header className={styles.header}>
				<h1>Downloads</h1>
				<h3>Under construction.</h3>
			</header>
			<p>
				<Link routeName="tag" routeParams={{ tagName: 'downloads' }}>
					For now, please click here to view the <strong>downloads</strong> tag
					instead!
				</Link>
			</p>
		</div>
	</div>
)

const styles = {
	wrapper: () => ({
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	}),
	downloads: ({ columnSpacing, itemPadding }) => ({
		...listItem({ columnSpacing }),
		...listItemPadding({ itemPadding: itemPadding * 2 }),
		textAlign: 'center',
		display: 'inline-block',
	}),
	header: ({ columnSpacing }) => ({
		marginBottom: `${columnSpacing}px`,
	}),
}

export default compose(
	withConfig('columnSpacing', 'itemPadding'),
	connectStyles(styles),
)(Downloads)
