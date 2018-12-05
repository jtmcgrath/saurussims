import React from 'react'

import { Hidden, Settings } from '~/tumblr'

const SettingsElement = () => (
	<Hidden>
		<Settings.Color name="Menu bar background" content="#fff" />
		<Settings.Color name="Menu bar text color" content="#222" />
		<Settings.Image name="Avatar Image" />
		<Settings.Image name="Background Image" />
		<Settings.Select
			name="Body Font"
			options={[
				'Alegreya Sans',
				'Cabin',
				'Source Sans Pro',
				'Droid Serif',
				'Lato',
				'Vollkorn',
				'Merriweather',
				'PT Sans',
				'Roboto Slab',
				'Raleway',
				'Varela',
				'Varela Round',
				'Open Sans',
				'Arial',
				'Georgia',
			]}
		/>
		<Settings.Select
			name="Title Font"
			options={[
				'Amatic SC',
				'Open Sans',
				'Source Sans Pro',
				'Cabin',
				'Droid Serif',
				'Lato',
				'Vollkorn',
				'Merriweather',
				'PT Sans',
				'Roboto Slab',
				'Raleway',
				'Varela',
				'Varela Round',
				'Arial',
				'Georgia',
			]}
		/>
		<Settings.Select
			name="Layout Type"
			options={[
				['three-col', '3 Columns'],
				['two-col', '2 Columns'],
				['one-col', '1 Column'],
			]}
		/>
		<Settings.Text name="Twitter Link" />
		<Settings.Text name="Youtube Link" />
		<Settings.Text name="Instagram Link" />
	</Hidden>
)

export default SettingsElement
