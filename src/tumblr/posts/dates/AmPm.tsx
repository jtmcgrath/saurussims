import { renderString } from '~/tumblr/helpers'

interface AmPmProps {
	capitals?: boolean
}

export default renderString<AmPmProps>('AmPm', ({ capitals }) =>
	capitals ? '{CapitalAmPm}' : '{AmPm}'
)
