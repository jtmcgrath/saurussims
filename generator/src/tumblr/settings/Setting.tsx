import React from 'react'

interface Setting {
	name: string
	content?: string
}

const createSetting = (type: 'color' | 'image' | 'text') => {
	const Component: React.SFC<Setting> = ({ name, content }) => (
		<meta name={`${type}:${name}`} content={content || ''} />
	)

	Component.displayName = `Setting(${type})`

	return Component
}

export const Color = createSetting('color')
export const Image = createSetting('image')
export const Text = createSetting('text')
