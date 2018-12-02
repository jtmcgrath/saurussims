import { renderString } from '~/tumblr/helpers'

export default renderString(
	'PostTitle',
	() => '{block:PostTitle}{PostTitle}{/block:PostTitle}'
)
