import React from 'react'

export interface AppProps {
	app: string
}

export const App: React.SFC<AppProps> = () => <p>Hello, world!</p>
