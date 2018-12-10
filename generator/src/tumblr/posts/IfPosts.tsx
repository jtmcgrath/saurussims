import { renderBlock } from '~/tumblr/helpers'

interface PostsProps {
    inlineMediaWidth?: number,
    inlineNestedMediaWidth?: number,
}

export default renderBlock<PostsProps>('Posts')
