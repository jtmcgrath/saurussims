import React, { createElement } from 'react'
import { Link, withRoute } from 'react-router5'
import { connect } from 'react-redux'

import { List } from 'components'
import { generateList, generateListAroundCenter } from 'utils/list'

const createLink = (linkProps, pageId, content) => {
	const targetIsPage = pageId !== 1
	const routeName = targetIsPage
		? linkProps.routeName
		: linkProps.routeName.replace('.page', '')
	return createElement(Link, {
		key: content || pageId,
		...linkProps,
		routeName,
		routeParams: {
			...(linkProps.routeParams.tagName
				? { tagName: linkProps.routeParams.tagName }
				: {}),
			...(pageId > 1
				? {
						pageId,
					}
				: {}),
		},
		children: content || pageId,
	})
}

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

const mapStateToProps = (state, ownProps) => {
	const tagName = ownProps.route.params.tagName
	return {
		linkProps: {
			routeName: `${tagName ? 'tag' : 'all'}.page`,
			routeParams: ownProps.route.params,
		},
		pageCount: state.tumblr.pageCounts[tagName || 'all'],
		pageId: ownProps.route.params.pageId,
	}
}

export default withRoute(connect(mapStateToProps)(Pagination))
