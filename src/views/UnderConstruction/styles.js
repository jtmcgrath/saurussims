import { listItem, listItemPadding } from 'utils/styling'

export default {
	wrapper: () => ({
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	}),
	content: ({ columnSpacing, itemPadding }) => ({
		...listItem({ columnSpacing }),
		...listItemPadding({ itemPadding: itemPadding * 2 }),
		display: 'inline-block',
		textAlign: 'center',
	}),
	header: ({ columnSpacing }) => ({
		marginBottom: `${columnSpacing}px`,
	}),
}
