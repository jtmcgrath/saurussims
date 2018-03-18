import { createElement } from 'react'
import { Link } from 'react-router5'

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

export default createLink
