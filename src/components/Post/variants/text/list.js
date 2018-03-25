import React from 'react'

const Text = ({ body, styles }) => (
	<article className={styles.text} dangerouslySetInnerHTML={{ __html: body }} />
)

export default Text
