import React from 'react'

import { DownloadList, Link, Page } from 'components'

const Downloads = () => (
	<div>
		<Page maxWidth="320px">
			<h1>Downloads</h1>
			<p>
				I&apos;m still putting this section together, but for now you
				can at least browse through all the downloads.
				<Link routeName="tag" routeParams={{ tagName: 'mycc' }}>
					You can also click here to view my #downloads tag with all
					the posts!
				</Link>
			</p>
		</Page>
		<DownloadList contentType="download" />
	</div>
)

export default Downloads
