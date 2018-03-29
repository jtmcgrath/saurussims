import React from 'react'

import Standard from './standard/list'
import Wcif from './wcif/list'

const Answer = props =>
	props.tags.includes('WCIF') ? <Wcif {...props} /> : <Standard {...props} />

export default Answer
