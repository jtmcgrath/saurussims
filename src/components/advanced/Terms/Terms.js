import React, { createElement } from 'react'
import { connect as connectStyles } from 'react-fela'
import { margin } from 'polished'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'

import * as content from './content'

const Terms = ({ styles, terms }) => (
	<div className={styles.terms}>
		{createElement(content[terms] || 'div')}
	</div>
)

const styles = {
	terms: ({ center, columnSpacing }) => ({
		...margin(`${columnSpacing}px`, 'auto', 0),
		color: '#919191',
		lineHeight: '1.4',
		maxWidth: '400px',
		textAlign: center ? 'center' : 'left',
	}),
}

export default compose(withConfig('columnSpacing'), connectStyles(styles))(
	Terms,
)
