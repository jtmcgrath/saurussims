import tumblr from 'tumblr'

import { RECEIVE_POSTS, RECEIVE_PAGE, REQUEST_PAGE } from './actionTypes'

const receivePost = post => ({
	type: RECEIVE_POSTS,
	posts: {
		[post.id]: post,
	},
})

const receivePosts = posts => ({
	type: RECEIVE_POSTS,
	posts,
})

const receivePage = (tag = '', page, posts) => ({
	type: RECEIVE_PAGE,
	tag,
	page,
	posts,
})

export const requestPage = (page, tag) => dispatch => {
	dispatch({ type: REQUEST_PAGE, page, tag })

	tumblr.getPosts(tag)(page)((err, { posts }) => {
		const pageData = []
		const postData = {}
		posts.forEach(post => {
			pageData.push(post.id)
			postData[post.id] = post
		})
		dispatch(receivePosts(postData))
		dispatch(receivePage(tag, page, pageData))
	})
}
