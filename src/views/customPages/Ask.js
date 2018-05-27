import React, { createElement, Fragment } from 'react'
import { connect as connectStyles } from 'react-fela'
import withState from 'react-state-hoc'
import { Link } from 'react-router5'

import { Page } from 'components'
import { compose } from 'utils/general'
import { withConfig } from 'hocs'

const iframeSize = {
	height: 327,
	width: 335
}

const Notice = ({ setState, styles }) => (
	<div className={styles.confirm} onClick={() => setState({ clicked: true })}>
		<h1>Ask Away!</h1>
		<p>- No requests</p>
		<p>
			- Search through &nbsp;
			{
				<Link routeName="tag" routeParams={{ tagName: 'wcif' }}>
					#WCIF
				</Link>
			}
			&nbsp; before asking
		</p>
	</div>
)

const Form = ({ styles, username }) => (
	<Fragment>
		<h1>Ask Away!</h1>
		<iframe
			className={styles.iframe}
			frameBorder="0"
			scrolling="no"
			src={`https://www.tumblr.com/ask_form/${username}.tumblr.com`}
		/>
	</Fragment>
)

const Ask = props => {
	const { clicked, itemPadding, styles } = props

	return (
		<Page maxWidth={iframeSize.width}>
			{createElement(clicked ? Form : Notice, props)}
		</Page>
	)
}

export default compose(
	withConfig('account.username', 'itemPadding'),
	withState({ clicked: false }),
	connectStyles({
		confirm: ({ clicked }) => ({
			cursor: clicked ? 'default' : 'pointer'
		}),
		iframe: () => ({
			height: `${iframeSize.height}px`,
			marginTop: '1em',
			verticalAlign: 'top',
			width: `${iframeSize.width}px`
		})
	})
)(Ask)
