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
	link: ({ contentType, isDesktop, itemPadding }) => ({
		...borderRadius('50%'),
		border: `${itemPadding}px solid white`,
		display: 'block',
		overflow: 'hidden',
		position: 'relative',
		width:
			contentType === 'download'
				? '260px'
				: isDesktop
					? '187px'
					: '150px',
		'@media (max-width: 392px)': {
			width: 'calc(50% - 30px)',
		},
	}),
	image: ({ image }) => ({
		...(image ? {} : { opacity: 0 }),
		verticalAlign: 'top',
	}),
	title: ({ image }) => ({
		...position('absolute', 0),
		...padding('20px'),
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		lineHeight: 1,
		textAlign: 'center',
		transition: 'all .4s ease',
		...(image
			? {
					background: 'rgba(255,255,255,.9)',
					opacity: 0,
					':hover': {
						opacity: 1,
					},
			  }
			: {
					color: 'white',
					':hover': {
						background: 'rgba(255,255,255,.9)',
						color: '#919191',
					},
			  }),
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
