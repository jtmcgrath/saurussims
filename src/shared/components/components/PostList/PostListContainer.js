import { connect } from 'react-redux'
import { withState } from 'react-state-hoc'
import { filter, map, flatMap, takeUntil } from 'rxjs/operators'
import { merge } from 'rxjs'

import { getPage } from 'dependencies/store'
import { withCache } from 'shared/components/hocs'
import { withContext } from 'shared/context'
import { withEffects, toLocalCallback } from 'shared/effects'
import { compose } from 'shared/utils'

import PostList from './PostList'

const mapStateToProps = (
	state,
	{ columnCount, hideTags, isDesktop, route }
) => {
	const { tagName = '', pageId = 1 } = route.params

	const allPosts = getPage(state, `${tagName}${pageId}`)
	const filteredPosts =
		allPosts && hideTags
			? allPosts.filter(
					({ tags }) =>
						!tags.some(tag => hideTags(filter => filter === tag))
			  )
			: allPosts

	return {
		columnCount: isDesktop ? columnCount - 1 : columnCount,
		posts: filteredPosts,
	}
}

const aperture = ({ context }) => component => {
	const { api, imageCache } = context

	const awaitImages = posts =>
		imageCache
			.loadImages(posts.map(post => post.image).filter(Boolean))
			.pipe(
				map(() => ({ loading: false })),
				map(toLocalCallback('setState'))
			)

	const waitFiveMinutes = ({ tag, pageId }) => {
		const lastFetch = api.tumblr.checkRequest('getPosts', tag, pageId)

		return !lastFetch || Date.now() - lastFetch > 5 * 60 * 1000
	}

	const getPosts$ = component.observe('route').pipe(
		map(route => route.params),
		filter(waitFiveMinutes),
		flatMap(({ tag, pageId }) => api.tumblr.getPosts(tag, pageId)),
		takeUntil(component.unmount)
	)

	const getImages$ = component.observe('posts').pipe(
		filter(Boolean),
		flatMap(posts => awaitImages(posts))
	)

	return merge(getPosts$, getImages$)
}

export default compose(
	withContext('columnCount', 'isDesktop'),
	connect(mapStateToProps),
	withCache('posts'),
	withState({ loading: true }),
	withEffects(aperture)
)(PostList)
