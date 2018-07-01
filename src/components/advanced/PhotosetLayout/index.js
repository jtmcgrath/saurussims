import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'

import PhotosetLayout from './component'
import styles from './styles'

export default compose(withConfig('itemPadding'), connectStyles(styles))(
	PhotosetLayout,
)
