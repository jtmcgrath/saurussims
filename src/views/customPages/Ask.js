import React from 'react'
import { connect as connectStyles } from 'react-fela'

import { Page } from 'components'

const Ask = ({ styles }) => (
	<Page>
		<h1>Ask Away!</h1>
		<iframe
			className={styles.iframe}
			frameborder="0"
			scrolling="no"
			src="https://www.tumblr.com/ask_form/saurussims.tumblr.com"
		/>
	</Page>
)

export default connectStyles({
	iframe: () => ({
		height: '327px',
		marginTop: '1em',
		width: '335px',
	}),
})(Ask)
