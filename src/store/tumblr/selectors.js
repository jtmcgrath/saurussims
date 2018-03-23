const getNode = state => state.tumblr

export const getPosts = state => getNode(state).posts
export const getPost = (state, id) => getPosts(state)[id]

export const getPageCounts = state => getNode(state).pageCounts
export const getPageCount = (state, id) => getPageCounts(state)[id]

export const getPages = state => getNode(state).pages
export const getPage = (state, id) => getPages(state)[id]
