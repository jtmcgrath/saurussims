import { requestDownloads, requestPage, requestPost } from 'store'

const createPageRequest = name => ({ pageId = 1, tagName = '' }) =>
	requestPage(name, pageId, tagName)

const requestPostIfNeeded = ({ postId }, state) =>
	!state.tumblr.posts[postId] && requestPost('post', postId)

const routes = [
	{
		name: 'all',
		path: '/',
		onActivate: createPageRequest('all'),
	},
	{ name: 'all.index', path: 'page/1', forwardTo: 'all' },
	{
		name: 'all.page',
		path: 'page/:pageId',
		onActivate: createPageRequest('all.page'),
	},
	{
		name: 'tag',
		path: '/tagged/:tagName',
		onActivate: createPageRequest('tag'),
	},
	{
		name: 'tag.index',
		path: '/page/1',
		forwardTo: 'tag',
	},
	{
		name: 'tag.page',
		path: '/page/:pageId',
		onActivate: createPageRequest('tag.page'),
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
	{ name: 'downloads', path: '/downloads', onActivate: requestDownloads },
	{ name: 'sims', path: '/sims' },
	{ name: 'notFound', path: '/404' },
]

export default routes
