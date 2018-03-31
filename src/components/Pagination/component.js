import React from 'react'
import classNames from 'classnames'

import { List } from 'components'
import { generateList, generateListAroundCenter } from 'utils/list'

import createLink from './createLink'

const Pagination = ({ linkProps: lp, maxItems, pageId, pageCount, styles }) => {
	const linkProps = {
		...lp,
		className: classNames(lp.className, styles.item),
	}

	let config
	if (pageCount < maxItems + 1) {
		config = {
			pages: generateList(1, pageCount),
			next: null,
			prev: null,
			first: null,
			last: null,
		}
	} else {
		const pages = generateListAroundCenter(pageId, pageCount, maxItems)

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
		<nav>
			<List className={styles.wrapper}>
				{[
					config.first,
					config.prev,
					...config.pages.map(pageId => createLink(linkProps, pageId)),
					config.next,
					config.last,
				]}
			</List>
		</nav>
	)
}

Pagination.defaultProps = {
	pageId: 1,
	maxItems: 9,
}

export default Pagination
