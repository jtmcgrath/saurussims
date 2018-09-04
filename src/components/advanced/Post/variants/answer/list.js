import { createElement } from 'react'

import Standard from './standard/list'
import Wcif from './wcif/list'

const cutoutAnswers = ['wcif', 'gif']

const Answer = props =>
	createElement(
		props.tags.some(tag => cutoutAnswers.includes(tag.toLowerCase()))
			? Wcif
			: Standard,
		props
	)

export default Answer
