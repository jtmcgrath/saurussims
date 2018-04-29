import React, { createElement, Fragment } from 'react'

import { Download, Icon, Loading, NotFound } from 'components'

const DownloadList = ({
	cachedDownloads: downloads,
	contentType,
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
			{downloads.map(download => (
				<Download contentType={contentType} {...download} />
			))}
		</div>
	) : (
		<NotFound title="No downloads found!" />
	)
}

export default DownloadList
