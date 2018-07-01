import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withCache, withConfig } from 'hocs'
import { getColumnCount, getDownloads, isDesktop as getIsDesktop } from 'store'

import DownloadList from './component'
import styles from './styles'

const mapStateToProps = (state, props) => {
	const isDesktop = getIsDesktop(state)
	const columnCount = getColumnCount(state)

	return {
		columnCount: isDesktop ? columnCount - 1 : columnCount,
		downloads: getDownloads(props.contentType)(state),
		isDesktop,
	}
}

export default compose(
	withConfig('columnSpacing', 'columnWidth', 'itemPadding'),
	connect(mapStateToProps),
	withCache('downloads'),
	connectStyles(styles),
)(DownloadList)
