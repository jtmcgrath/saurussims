import React from 'react'
import classNames from 'classnames'

import { Sidebar } from 'components'

const Attribution = ({ styles, to }) => (
	<a href={`https://${to}.tumblr.com`} className={styles.attribution}>
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
			<div className={styles.question}>
				<span dangerouslySetInnerHTML={{ __html: question }} />
				<Attribution to={asking_name} styles={styles} />
			</div>
			<div className={styles.answer}>
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
