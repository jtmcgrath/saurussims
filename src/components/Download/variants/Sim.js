import React from 'react'
import classNames from 'classnames'

import { Link, Icon } from 'components'

const Sim = ({ className, download, image, name, styles, tagName }) => (
	<div className={styles.wrapper}>
		<Link
			className={classNames(className, styles.link)}
			routeName="tag"
			routeParams={{ tagName }}
		>
			<img className={styles.image} src={image} alt={name} />
			<h1 className={styles.title}>{name}</h1>
		</Link>
		{download && (
			<Link className={classNames('download', styles.download)} href={download}>
				<Icon icon="Download" />
			</Link>
		)}
	</div>
)

export default Sim
