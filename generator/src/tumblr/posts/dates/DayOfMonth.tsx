import { renderString } from '~/tumblr/helpers'

interface DayOfMonthProps {
	leadingZero?: boolean
	suffix?: boolean
}

export default renderString<DayOfMonthProps>(
	'DayOfMonth',
	({ leadingZero, suffix }) => {
		const n = leadingZero ? '{DayOfMonthWithZero}' : '{DayOfMonth}'
		const th = suffix ? '{DayOfMonthSuffix}' : ''

		return n + th
	}
)
