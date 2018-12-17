import React from 'react'

import { SimData } from '../config/api'

export type SimProps = SimData & {
	type: 'sim'
}

export const Sim: React.SFC<SimProps> = ({
	download,
	image,
	name,
	tagName,
}) => (
	<div className="item sim">
		<a
			href={`${window.location.origin}/tagged/${tagName}`}
			className="item-link"
		>
			<img src={image} alt={name} />
			<h1>{name}</h1>
		</a>
		{download ? (
			<a href={download} className="item-actions">
				<svg
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" y1="15" x2="12" y2="3" />
				</svg>
			</a>
		) : null}
	</div>
)
