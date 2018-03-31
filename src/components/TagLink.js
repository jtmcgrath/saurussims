import React from 'react'
import { Link } from 'react-router5'
import { connect as connectStyles } from 'react-fela'
import classNames from 'classnames'

import { link } from 'utils/styling'

const styles = {
	link: () => link,
}

const TagLink = ({ styles, tag }) => {
	const tagName = tag.replace(/ /g, '-')
	const tagNameIsValid = !/[^A-z0-9-]/.test(tagName)

	return tagNameIsValid ? (
		<Link className={styles.link} routeName="tag" routeParams={{ tagName }}>
			#{tag}
		</Link>
	) : (
		<span className={classNames('hyperlink', styles.link)}>#{tag}</span>
	)
}

export default connectStyles(styles)(TagLink)
