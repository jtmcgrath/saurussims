import React from 'react'
import { Link } from 'react-router5'
import { connect as connectStyles } from 'react-fela'
import classNames from 'classnames'

import { link } from 'utils/styling'

const styles = {
	link: () => ({
		...link,
	}),
}

const TagLink = ({ styles, tag }) => {
	const tagName = tag.replace(/ /g, '-')
	const tagNameIsInvalid = /[^A-z0-9-]/.test(tagName)

	return tagNameIsInvalid ? (
		<span className={classNames('hyperlink', styles.link)}>#{tag}</span>
	) : (
		<Link className={styles.link} routeName="tag" routeParams={{ tagName }}>
			#{tag}
		</Link>
	)
}

export default connectStyles(styles)(TagLink)
