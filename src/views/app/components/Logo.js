import React from 'react'

import { withContext } from 'shared/context'

import LogoElem from './Logo.styles'

const Logo = ({ tumblr, ...props }) => (
	<LogoElem {...props}>
		<img src={tumblr.account.avatar} alt={tumblr.account.title} />
		<h1>{tumblr.account.title}</h1>
		<h4>{tumblr.account.description}</h4>
	</LogoElem>
)

export default withContext(Logo)
