import { renderString } from '~/tumblr/helpers'

interface PlayCountProps {
	formatted?: boolean
	label?: boolean
}

export default renderString<PlayCountProps>(
	'PlayCount',
	({ formatted, label }) => {
		switch (true) {
			case formatted:
				return '{FormattedPlayCount}'

			case label:
				return '{PlayCountWithLabel}'

			default:
				return '{PlayCount}'
		}
	}
)
