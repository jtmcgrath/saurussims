import tumblr from 'tumblr'

import {
	RECEIVE_POSTS,
	RECEIVE_PAGE,
	REQUEST_PAGE,
	REQUEST_POST,
} from './actionTypes'

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

const receivePage = (tag = '', page, pageCount, posts) => ({
	type: RECEIVE_PAGE,
	tag,
	page,
	pageCount,
	posts,
})

export const requestPost = (route, postId) => dispatch => {
	dispatch({ type: REQUEST_POST, postId })

	tumblr.getPost(postId)((err, { post }) => {
		dispatch(receivePost(post))
	})
}

export const requestPage = (route, page, tag) => dispatch => {
	dispatch({ type: REQUEST_PAGE, page, tag })

	tumblr.getPosts(tag)(page)((err, { posts, total_posts }) => {
		const pageCount = Math.ceil(total_posts / 20)
		const pageData = []
		const postData = {}
		posts.forEach(post => {
			pageData.push(post.id)
			postData[post.id] = post
		})
		dispatch(receivePosts(postData))
		dispatch(receivePage(tag, page, pageCount, pageData))
	})
}
