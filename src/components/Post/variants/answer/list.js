import React from 'react'

const Answer = ({ asking_name, question, styles, ...props }) => (
	<article>
		<div className={styles.question}>
			<span dangerouslySetInnerHTML={{ __html: question }} />
			<span className={styles.attribution}>{asking_name}</span>
		</div>
	</article>
)

export default Answer
