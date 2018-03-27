import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Answer = ({
	answer,
	asking_name,
	linkProps,
	question,
	styles,
	...props
}) =>
	props.tags.includes('WCIF') ? (
		<article
			className={classNames(
				styles.listItem,
				styles.wcif,
				styles.listItemPadding,
			)}
		>
			<Link {...linkProps}>
				<div dangerouslySetInnerHTML={{ __html: answer }} />
			</Link>
		</article>
	) : (
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

export default Answer
