import React from 'react'

import { DownloadList, Page } from 'components'

const Downloads = () => (
	<div>
		<Page maxWidth="320px">
			<h1>Downloads</h1>
			<p>
				I&apos;m still putting this section together, but for now you
				can at least browse through all the downloads!
			</p>
		</Page>
		<DownloadList contentType="download" />
	</div>
)

export default Downloads
