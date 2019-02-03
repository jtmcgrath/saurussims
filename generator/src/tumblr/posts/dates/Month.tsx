import { renderString } from '~/tumblr/helpers'

interface MonthProps {
	leadingZero?: boolean
	type?: 'short' | 'number'
}

export default renderString<MonthProps>('Month', ({ leadingZero, type }) => {
	switch (type) {
		case 'short':
			return '{ShortMonth}'

		case 'number':
			return leadingZero ? '{MonthNumberWithZero}' : '{MonthNumber}'

		default:
			return '{Month}'
	}
})
