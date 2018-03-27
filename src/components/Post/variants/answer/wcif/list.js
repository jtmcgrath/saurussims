import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Wcif = ({ answer, linkProps, styles }) => (
	<article
		className={classNames(styles.listItem, styles.wcif, styles.listItemPadding)}
	>
		<Link {...linkProps}>
			<div dangerouslySetInnerHTML={{ __html: answer }} />
		</Link>
	</article>
)

export default Wcif
