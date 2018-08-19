import { createContext } from 'react'
import { contextToProps, propsToContext } from 'react-zap'

const GlobalContext = createContext()

export const withContext = contextToProps(GlobalContext.Consumer)
export const toContext = propsToContext(GlobalContext.Provider)

export default GlobalContext
