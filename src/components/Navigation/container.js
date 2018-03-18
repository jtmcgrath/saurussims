import { createElement } from 'react'
import withState from 'react-state-hoc'
import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'

import Navigation from './Navigation'
import desktopStyles from './Navigation.styles.desktop'
import mobileStyles from './Navigation.styles.mobile'

const DesktopNavigation = connectStyles(desktopStyles)(Navigation)
const MobileNavigation = connectStyles(mobileStyles)(Navigation)

const NavigationSwitch = ({ desktopLayout, ...props }) =>
	createElement(desktopLayout ? DesktopNavigation : MobileNavigation, props)

const mapStateToProps = (state, props) => ({
	desktopLayout: state.viewport.columnCount > 2,
	...state.viewport,
	...props,
})

export default compose(connect(mapStateToProps), withState({ visible: false }))(
	NavigationSwitch,
)
