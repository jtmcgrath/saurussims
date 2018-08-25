import { createContext } from 'react'
import { contextToProps, propsToContext } from 'react-zap'

import { get } from 'shared/utils'

const mergeToProps = targets => (props, context) =>
	targets.length
		? targets.reduce((acc, curr) => {
				const paths = curr.split('.')
				const key = paths.length > 1 ? paths[paths.length - 1] : curr

				return {
					...acc,
					[key]: get(context, curr),
				}
		  }, props)
		: { ...props, ...context }

const GlobalContext = createContext()

export const withContext = (...targets) =>
	contextToProps(GlobalContext.Consumer, mergeToProps(targets))
export const toContext = propsToContext(GlobalContext.Provider)

export default GlobalContext
