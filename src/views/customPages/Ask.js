import React from 'react'
import { connect as connectStyles } from 'react-fela'

import { Page } from 'components'
import { compose } from 'utils/general'
import { withConfig } from 'hocs'

const Ask = ({ styles, username }) => (
	<Page>
		<h1>Ask Away!</h1>
		<iframe
			className={styles.iframe}
			frameborder="0"
			title="ask-away"
			scrolling="no"
			src={`https://www.tumblr.com/ask_form/${username}.tumblr.com`}
		/>
	</Page>
)

export default compose(
	withConfig('account.username'),
	connectStyles({
		iframe: () => ({
			height: '327px',
			marginTop: '1em',
			verticalAlign: 'top',
			width: '335px',
		}),
	}),
)(Ask)
