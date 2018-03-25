import React from 'react'
import classNames from 'classnames'

const Answer = ({ answer, asking_name, question, styles, ...props }) =>
	props.tags.includes('WCIF') ? (
		<article
			className={classNames(styles.listItem, styles.wcif)}
			dangerouslySetInnerHTML={{ __html: answer }}
		/>
	) : (
		<article>
			<div className={styles.question}>
				<span dangerouslySetInnerHTML={{ __html: question }} />
				<span className={styles.attribution}>{asking_name}</span>
			</div>
		</article>
	)

export default Answer
