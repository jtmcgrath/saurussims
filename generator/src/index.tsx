import React from 'react'
import { renderToString } from 'react-dom/server'
import pretty from 'pretty'
import App from './App'
import './index.css'

const app = renderToString(<App />)

const root = document.getElementById('root') as HTMLElement

root.textContent = pretty(app, { ocd: true })
