import { requestPage, requestPost } from 'store'

const requestPageIfNeeded = name => (state, { pageId = 1, tagName = '' }) =>
	!state.tumblr.pages[`${tagName}${pageId}`] &&
	requestPage(name, pageId, tagName)

const requestPostIfNeeded = (state, { postId }) =>
	!state.tumblr.posts[postId] && requestPost('post', postId)

const routes = [
	{
		name: 'all',
		path: '/',
		onActivate: requestPageIfNeeded('all'),
	},
	{ name: 'all.index', path: 'page/1', forwardTo: 'all' },
	{
		name: 'all.page',
		path: 'page/:pageId',
		onActivate: requestPageIfNeeded('all.page'),
	},
	{
		name: 'tag',
		path: '/tagged/:tagName',
		onActivate: requestPageIfNeeded('tag'),
	},
	{
		name: 'tag.index',
		path: '/page/1',
		forwardTo: 'tag',
	},
	{
		name: 'tag.page',
		path: '/page/:pageId',
		onActivate: requestPageIfNeeded('tag.page'),
	},
	{
		name: 'post',
		path: '/post/:postId/:postSlug',
		onActivate: requestPostIfNeeded,
	},
	{
		name: 'postWithoutSlug',
		path: '/post/:postId',
		onActivate: requestPostIfNeeded,
	},
	{ name: 'ask', path: '/ask' },
	{ name: 'downloads', path: '/downloads' },
	{ name: 'sims', path: '/sims' },
	{ name: 'notFound', path: '/404' },
]

export default routes
