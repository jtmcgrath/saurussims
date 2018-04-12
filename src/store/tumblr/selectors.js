const getNode = state => state.tumblr

export const getLikeStates = state => getNode(state).likes
export const getLikeStatus = (state, id) => getLikeStates(state)[id]

export const getPosts = state => getNode(state).posts
export const getPost = (state, id) => getPosts(state)[id]
export const getReblogKey = (state, id) => getPost(state, id).reblog_key

export const getPageCounts = state => getNode(state).pageCounts
export const getPageCount = (state, id) => getPageCounts(state)[id]

export const getPages = state => getNode(state).pages
export const getPage = (state, id) => getPages(state)[id]

export const getUserLoggedIn = state => getNode(state).userLoggedIn
