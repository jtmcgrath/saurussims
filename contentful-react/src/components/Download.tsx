import React from 'react'

import { DownloadData } from '../config/api'

export type DownloadProps = DownloadData & {
	type: 'download'
}

export const Download: React.SFC<DownloadProps> = ({ title, link, image }) => (
	<div className="item download">
		<a href={link} className="item-link">
			<img src={image} alt={title} />
			<h1>{title}</h1>
		</a>
	</div>
)
