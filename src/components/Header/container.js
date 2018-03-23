import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'

import styles from './styles'
import Header from './component'

export default compose(
	withConfig(
		'account.avatar',
		'account.username',
		'account.description',
		'columnWidth',
		'columnSpacing',
	),
	connectStyles(styles),
)(Header)
