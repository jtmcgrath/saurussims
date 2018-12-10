import React from 'react'

import { Download, DownloadProps } from './Download'
import { Sim, SimProps } from './Sim'

export type ItemProps = DownloadProps | SimProps

export const Item: React.SFC<ItemProps> = props => {
	switch (props.type) {
		case 'download': {
			return <Download {...props} />
		}

		case 'sim': {
			return <Sim {...props} />
		}

		default: {
			return null
		}
	}
}
