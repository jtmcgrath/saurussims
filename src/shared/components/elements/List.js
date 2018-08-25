import React from 'react'

const List = ({ children, className, itemClassName }) => (
	<ul className={className}>
		{children.map(
			(child, index) =>
				child ? (
					<li key={child.key || index} className={itemClassName}>
						{child}
					</li>
				) : null
		)}
	</ul>
)

export default List
