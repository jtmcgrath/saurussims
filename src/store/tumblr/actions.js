import { RECEIVE_POSTS, RECEIVE_PAGE, RECEIVE_USER_STATUS } from './actionTypes'
import { transformPost } from './transformers'

export const receivePost = post => ({
	type: RECEIVE_POSTS,
	posts: {
		[post.id]: transformPost(post),
	},
})

export const receivePosts = posts => ({
	type: RECEIVE_POSTS,
	posts,
})

export const receivePage = (tag = '', page, pageCount, posts) => ({
	type: RECEIVE_PAGE,
	tag,
	page,
	pageCount,
	posts,
})

export const receiveUserStatus = status => ({
	type: RECEIVE_USER_STATUS,
	status,
})
