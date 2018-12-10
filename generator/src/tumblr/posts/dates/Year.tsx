import { renderString } from '~/tumblr/helpers'

interface YearProps {
	short?: boolean
}

export default renderString<YearProps>('Year', ({ short }) =>
	short ? '{ShortYear}' : '{Year}'
)
