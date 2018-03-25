import All from './all'
import Post from './post'
import Tag from './tag'
import * as customPages from './customPages'

const routeComponents = {
	all: All,
	post: Post,
	postWithoutSlug: Post,
	tag: Tag,
	...customPages,
}

export default routeComponents
