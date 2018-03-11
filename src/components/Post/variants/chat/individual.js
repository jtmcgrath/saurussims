import React from 'react'

const Chat = props => (
	<pre>{JSON.stringify({ component: 'Chat', ...props }, null, 2)}</pre>
)

export default Chat
