import React from 'react'
import classNames from 'classnames'

import { Sidebar } from 'components'

const Answer = ({ answer, asking_name, question, styles, ...props }) => (
	<article className={classNames(styles.wrapper, styles.responsiveWrapper)}>
		<div className={styles.wide}>
			<div className={styles.question}>
				<span dangerouslySetInnerHTML={{ __html: question }} />
				<a
					href={`https://${asking_name}.tumblr.com`}
					className={styles.attribution}
				>
					{asking_name}
				</a>
			</div>
			<div className={styles.answer}>
				<span dangerouslySetInnerHTML={{ __html: answer }} />
				<span className={styles.attribution}>Answerer</span>
			</div>
		</div>
		<div className={styles.narrow}>
			<Sidebar {...props} note_count={false} reblog={false} styles={styles} />
		</div>
	</article>
)

export default Answer
