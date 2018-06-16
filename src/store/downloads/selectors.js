const getNode = state => state.downloads

export const getDownloads = contentType => state => getNode(state)[contentType]
