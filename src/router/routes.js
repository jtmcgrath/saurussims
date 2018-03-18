import { requestPage, requestPost } from 'store'

const requestPageFactory = name => (state, { pageId = 1, tagName = '' }) =>
	!state.tumblr.pages[`${tagName}${pageId}`] &&
	requestPage(name, pageId, tagName)

const routes = [
	{
		name: 'all',
		path: '/',
		onActivate: requestPageFactory('all'),
	},
	{ name: 'all.index', path: 'page/1', forwardTo: 'all' },
	{
		name: 'all.page',
		path: 'page/:pageId',
		onActivate: requestPageFactory('all.page'),
	},
	{
		name: 'tag',
		path: '/tagged/:tagName',
		onActivate: requestPageFactory('tag'),
	},
	{
		name: 'tag.index',
		path: '/page/1',
		forwardTo: 'tag',
	},
	{
		name: 'tag.page',
		path: '/page/:pageId',
		onActivate: requestPageFactory('tag.page'),
	},
	{
		name: 'post',
		path: '/post/:postId',
		onActivate: (state, { postId }) =>
			!state.tumblr.posts[postId] && requestPost('post', postId),
	},
	{ name: 'ask', path: '/ask' },
	{ name: 'notFound', path: '/404' },
]

export default routes
