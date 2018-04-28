import React, { Fragment } from 'react'

import { Download, Icon, Loading, NotFound } from 'components'

const DownloadList = ({
	cachedDownloads: downloads,
	refresh,
	showRefresh,
	styles,
}) => {
	if (downloads === undefined || downloads === null) {
		return <Loading />
	}

	return downloads.length ? (
		<div className={styles.wrapper}>
			{showRefresh ? refresh : null}
			{downloads.map(download => <Download {...download} />)}
		</div>
	) : (
		<NotFound title="No downloads found!" />
	)
}

export default DownloadList
