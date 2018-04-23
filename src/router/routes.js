import { requestPage, requestPost } from 'store'

const createPageRequest = name => (state, { pageId = 1, tagName = '' }) =>
	requestPage(name, pageId, tagName)

const createPostRequest = (state, { postId }) => requestPost('post', postId)

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
		onActivate: createPostRequest,
	},
	{
		name: 'postWithoutSlug',
		path: '/post/:postId',
		onActivate: createPostRequest,
	},
	{ name: 'ask', path: '/ask' },
	{ name: 'downloads', path: '/downloads' },
	{ name: 'sims', path: '/sims' },
	{ name: 'notFound', path: '/404' },
]

export default routes
