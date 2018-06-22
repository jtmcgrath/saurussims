import { contextToProps } from 'react-zap'
import Config from 'context/config'

import { get } from 'utils/general'

const mergeToProps = targets => (props, config) =>
	targets
		? targets.reduce((acc, curr) => {
				const paths = curr.split('.')
				const key = paths.length > 1 ? paths[paths.length - 1] : curr

				return {
					...acc,
					[key]: get(config, curr),
				}
		  }, props)
		: { ...props, config }

const withConfig = (...targets) =>
	contextToProps(Config.Consumer, mergeToProps(targets))

export default withConfig
