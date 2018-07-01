import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Text = ({ body, linkProps, styles }) => (
	<article className={styles.text}>
		<Link
			{...linkProps}
			className={classNames(linkProps.className, styles.speechPadding)}
		>
			<div dangerouslySetInnerHTML={{ __html: body }} />
		</Link>
	</article>
)

export default Text
