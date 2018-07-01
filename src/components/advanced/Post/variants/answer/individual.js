import React from 'react'
import classNames from 'classnames'

import { Sidebar } from 'components'

const Attribution = ({ styles, to }) =>
	to.toLowerCase() === 'anonymous' ? (
		<span className={styles.attribution}>{to}</span>
	) : (
		<a
			href={`https://${to.toLowerCase()}.tumblr.com`}
			className={styles.attribution}
		>
			{to}
		</a>
	)

const Answer = ({
	answer,
	asking_name,
	blog_name,
	question,
	styles,
	...props
}) => (
	<article className={classNames(styles.wrapper, styles.responsiveWrapper)}>
		<div className={styles.wide}>
			<div className={classNames(styles.question, styles.speechPadding)}>
				<span dangerouslySetInnerHTML={{ __html: question }} />
				<Attribution to={asking_name} styles={styles} />
			</div>
			<div className={classNames(styles.answer, styles.speechPadding)}>
				<span dangerouslySetInnerHTML={{ __html: answer }} />
				<Attribution to={blog_name} styles={styles} />
			</div>
		</div>
		<div className={styles.narrow}>
			<Sidebar {...props} note_count={false} reblog={false} styles={styles} />
		</div>
	</article>
)

export default Answer
