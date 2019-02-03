import { renderBlock } from '~/tumblr/helpers'

export const IfNoteCount = renderBlock('PostNoteCount')
export const IfNotes = renderBlock('PostNotes')

export { default as NoteCount } from './NoteCount'
export { default as Notes } from './Notes'
