import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfAnswerer = renderBlock('Answerer')

export const Answer = renderString('Answer')
export const Answerer = renderString('Answerer')
export const Asker = renderString('Asker')
export const Question = renderString('Question')
export const Replies = renderString('Replies')

export { default as AnswererAvatar } from './AnswererAvatar'
export { default as AskerAvatar } from './AskerAvatar'
