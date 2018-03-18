import React from 'react'

import { List } from 'components'
import { generateList, generateListAroundCenter } from 'utils/list'

import createLink from './createLink'

const Pagination = ({ pageId, linkProps, pageCount }) => {
	let config
	if (pageCount < 10) {
		config = {
			pages: generateList(1, pageCount),
			next: null,
			prev: null,
			first: null,
			last: null,
		}
	} else {
		const pages = generateListAroundCenter(pageId, pageCount)

		config = {
			pages: pages,
			next:
				pageId < pageCount ? createLink(linkProps, pageId + 1, 'next') : null,
			prev: pageId > 1 ? createLink(linkProps, pageId - 1, 'prev') : null,
			first: pages.includes(1) ? null : createLink(linkProps, 1, 'first'),
			last: pages.includes(pageCount)
				? null
				: createLink(linkProps, pageCount, 'last'),
		}
	}

	return (
		<List>
			{[
				config.first,
				config.prev,
				...config.pages.map(pageId => createLink(linkProps, pageId)),
				config.next,
				config.last,
			]}
		</List>
	)
}

Pagination.defaultProps = {
	pageId: 1,
}

export default Pagination
