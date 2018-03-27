import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

import Standard from './standard/list'
import Wcif from './wcif/list'

const Answer = props =>
	props.tags.includes('WCIF') ? <Wcif {...props} /> : <Standard {...props} />

export default Answer
