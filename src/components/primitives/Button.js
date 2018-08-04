import React from 'react'
import { createComponent } from 'react-fela'
import { margin, padding } from 'polished'

const Button = ({ children, className, onClick }) => (
	<button className={className}>{children}</button>
)

const style = () => ({
	...margin(0, 'auto'),
	...padding(0, '10px'),
	backgroundColor: '#919191',
	borderRadius: '4px',
	color: 'white',
	fontSize: '22px',
	lineHeight: '32px',
	':hover': {
		backgroundColor: '#616161',
	},
})

export default createComponent(style, Button)
