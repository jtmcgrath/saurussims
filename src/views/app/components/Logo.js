import React from 'react'

import { withContext } from 'shared/context'

import LogoElem from './Logo.styles'

const Logo = ({ account, ...props }) => (
	<LogoElem {...props}>
		<img src={account.avatar.image} alt={account.title} />
		<h1>{account.title}</h1>
		<h4>{account.description}</h4>
	</LogoElem>
)

export default withContext('tumblr.account')(Logo)
