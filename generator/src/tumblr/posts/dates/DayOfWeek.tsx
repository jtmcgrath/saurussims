import { renderString } from '~/tumblr/helpers'

interface DayOfWeekProps {
	type?: 'short' | 'number'
}

export default renderString<DayOfWeekProps>('DayOfWeek', ({ type }) => {
	switch (type) {
		case 'short':
			return '{ShortDayOfWeek}'

		case 'number':
			return '{DayOfWeekNumber}'

		default:
			return '{DayOfWeek}'
	}
})
