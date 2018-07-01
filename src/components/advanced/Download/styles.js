import { margin, padding, position } from 'polished'

import { borderRadius } from 'utils/styling'

export default {
	wrapper: ({ columnSpacing }) => ({
		...margin(`${columnSpacing / 2}px`),
		display: 'inline-block',
		position: 'relative',
		':hover > a > h1, :hover > .download': {
			opacity: 1,
		},
	}),
	link: ({ isDesktop, itemPadding }) => ({
		...borderRadius('50%'),
		border: `${itemPadding}px solid white`,
		display: 'block',
		overflow: 'hidden',
		position: 'relative',
		width: isDesktop ? '187px' : '150px',
		'@media (max-width: 392px)': {
			width: 'calc(50% - 30px)',
		},
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
	download: () => ({
		...padding(0, '22px'),
		bottom: 0,
		left: '50%',
		lineHeight: '44px',
		opacity: 0,
		position: 'absolute',
		transform: 'translateX(-50%)',
		transition: 'opacity .4s ease',
	}),
}
