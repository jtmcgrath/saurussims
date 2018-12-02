import { renderBlock } from '~/tumblr/helpers'

interface JumpPaginationProps {
    length: number
}

export default renderBlock<JumpPaginationProps>('JumpPagination')
