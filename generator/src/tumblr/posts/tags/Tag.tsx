import { renderString } from '~/tumblr/helpers'

interface TagProps {
	urlSafe?: boolean
}

export default renderString<TagProps>('Tag', ({ urlSafe }) =>
	urlSafe ? '{URLSafeTag}' : '{Tag}'
)
