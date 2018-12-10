import { renderString } from '~/tumblr/helpers'

interface NotesProps {
	avatarSize?: '16' | '64'
}

export default renderString<NotesProps>('Notes', ({ avatarSize }) =>
	avatarSize ? `{PostNotes-${avatarSize}}` : '{PostNotes}'
)
