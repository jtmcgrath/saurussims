import { listItem, listItemPadding } from 'utils/styling'

const getItemPadding = ({ itemPadding }) => itemPadding * 2

const getMaxWidth = ({ itemPadding, maxWidth }) => {
	if (typeof maxWidth === 'string') {
		return { maxWidth }
	}

	if (typeof maxWidth === 'number') {
		const value = maxWidth + getItemPadding({ itemPadding }) * 2

		return {
			maxWidth: `${value}px`,
		}
	}

	return {}
}

export default {
	wrapper: () => ({
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	}),
	content: ({ columnSpacing, itemPadding, maxWidth }) => ({
		...listItem({ columnSpacing }),
		...listItemPadding({ itemPadding: getItemPadding({ itemPadding }) }),
		...getMaxWidth({ itemPadding, maxWidth }),
		display: 'inline-block',
		textAlign: 'center',
	}),
	header: ({ columnSpacing }) => ({
		marginBottom: `${columnSpacing}px`,
	}),
}
