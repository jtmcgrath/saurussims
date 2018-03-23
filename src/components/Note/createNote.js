import React from 'react'

import Note from './'

const createNote = props => (
	<li key={`${props.timestamp}${props.blog_name}`}>
		<Note {...props} />
	</li>
)

export default createNote
