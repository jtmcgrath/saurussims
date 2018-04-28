import { margin, position } from 'polished'

import { borderRadius } from 'utils/styling'

export default {
	link: ({ columnSpacing, itemPadding }) => ({
		...borderRadius('50%'),
		...margin(`${columnSpacing / 2}px`),
		border: `${itemPadding}px solid white`,
		display: 'inline-block',
		overflow: 'hidden',
		position: 'relative',
		width: '200px',
	}),
	image: () => ({
		verticalAlign: 'top',
	}),
	title: () => ({
		...position('absolute', 0),
		alignItems: 'center',
		background: 'rgba(255,255,255,.9)',
		display: 'flex',
		justifyContent: 'center',
		lineHeight: 1,
		opacity: 0,
		textAlign: 'center',
		transition: 'opacity .4s ease',
		':hover': {
			opacity: 1,
		},
	}),
}
