import React from 'react'

import { Avatar, FaviconURL, RSS } from '~/tumblr'

const Meta = () => (
	<>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, user-scalable=0"
		/>
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<FaviconURL
			element="link"
			asProp="href"
			props={{ rel: 'shortcut icon' }}
		/>
		<Avatar
			element="link"
			asProp="href"
			size="128"
			props={{ rel: 'apple-touch-icon-precomposed' }}
		/>
		<RSS
			element="link"
			asProp="href"
			props={{ rel: 'alternate', type: 'application/rss+xml' }}
		/>
	</>
)

export default Meta
