export const getColumnCount = state => state.columnCount
export const isDesktop = state => getColumnCount(state) > 2
