import { renderString } from '~/tumblr/helpers'

interface PageProps {
	type?: 'previous' | 'current' | 'next'
}

export default renderString<PageProps>('Page', ({ type }) => {
	switch (type) {
		case 'previous':
			return '{PreviousPage}'

		case 'next':
			return '{NextPage}'

		default:
			return '{CurrentPage}'
	}
})
