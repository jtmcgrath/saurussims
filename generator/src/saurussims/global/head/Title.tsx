import React from 'react'

import {
	IfDescription,
	IfTagPage,
	IfPostSummary,
	MetaDescription,
	Posts,
	PostSummary,
	Tumblr,
} from '~/tumblr'

const Title = () => (
	<>
		<IfDescription>
			<MetaDescription element="meta" asProp="content" />
		</IfDescription>
		<title>
			<IfTagPage><Posts.Tags.Tag /> posts -&nbsp;</IfTagPage>
			<IfPostSummary><PostSummary /> -&nbsp;</IfPostSummary>
			<Tumblr.Title />
		</title>
	</>
)

export default Title
