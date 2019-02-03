import { renderString } from '~/tumblr/helpers'

interface HourProps {
	leadingZero?: boolean
	type?: '12' | '24'
}

export default renderString<HourProps>('Hour', ({ leadingZero, type }) => {
	switch (type) {
		case '24':
			return leadingZero ? '{24HourWithZero}' : '{24Hour}'

		default:
			return leadingZero ? '{12HourWithZero}' : '{12Hour}'
	}
})
