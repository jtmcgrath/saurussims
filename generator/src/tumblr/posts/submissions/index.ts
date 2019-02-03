import { renderBlock, renderString } from '~/tumblr/helpers'

import Avatar from './SubmitterAvatar'

export const IfSubmission = renderBlock('Submission')

export const Submitter = {
	Avatar,
	Blog: renderString('Submitter'),
	URL: renderString('SubmitterURL'),
}
