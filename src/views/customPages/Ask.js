import React from 'react'
import { connect as connectStyles } from 'react-fela'

import { Page } from 'components'
import { compose } from 'utils/general'
import { withConfig } from 'hocs'

const Ask = ({ styles, tumblr }) => (
	<Page>
		<h1>Ask Away!</h1>
		<iframe
			className={styles.iframe}
			frameborder="0"
			scrolling="no"
			src={`https://www.tumblr.com/ask_form/${tumblr}.tumblr.com`}
		/>
	</Page>
)

export default compose(
	withConfig('account.tumblr'),
	connectStyles({
		iframe: () => ({
			height: '327px',
			marginTop: '1em',
			verticalAlign: 'top',
			width: '335px',
		}),
	}),
)(Ask)
