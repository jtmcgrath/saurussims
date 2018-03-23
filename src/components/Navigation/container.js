import { createElement } from 'react'
import withState from 'react-state-hoc'
import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'
import { getColumnCount, isDesktop } from 'store'

import Navigation from './component'
import desktopStyles from './styles.desktop'
import mobileStyles from './styles.mobile'

const DesktopNavigation = connectStyles(desktopStyles)(Navigation)
const MobileNavigation = connectStyles(mobileStyles)(Navigation)

const NavigationSwitch = ({ desktopLayout, ...props }) =>
	createElement(desktopLayout ? DesktopNavigation : MobileNavigation, props)

const mapStateToProps = (store, props) => ({
	columnCount: getColumnCount(store),
	desktopLayout: isDesktop(store),
	...props,
})

export default compose(
	connect(mapStateToProps),
	withState({ visible: false }),
	withConfig('background', 'columnSpacing', 'navigation'),
)(NavigationSwitch)
