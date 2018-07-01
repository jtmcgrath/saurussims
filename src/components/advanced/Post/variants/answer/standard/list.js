import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Standard = ({ asking_name, linkProps, question, styles }) => (
	<article>
		<div className={styles.question}>
			<Link
				{...linkProps}
				className={classNames(linkProps.className, styles.speechPadding)}
			>
				<span dangerouslySetInnerHTML={{ __html: question }} />
				<span className={styles.attribution}>{asking_name}</span>
			</Link>
		</div>
	</article>
)

export default Standard
