import { renderString } from '~/tumblr/helpers'

interface NoteCountProps {
	label?: boolean
}

export default renderString<NoteCountProps>('NoteCount', ({ label }) =>
	label ? '{NoteCountWithLabel}' : '{NoteCount}'
)
