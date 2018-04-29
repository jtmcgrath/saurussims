import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Download = ({ className, image, name, styles, tagName }) => (
	<Link
		className={classNames(className, styles.link)}
		routeName="tag"
		routeParams={{ tagName }}
	>
		<img className={styles.image} src={image} alt={name} />
		<h1 className={styles.title}>{name}</h1>
	</Link>
)

export default Download
