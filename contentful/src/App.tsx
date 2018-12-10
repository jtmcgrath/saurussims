import React from 'react'
import { Api } from './config/api'

import './style.css'
import { FetchData, Filters, ItemList } from './components'

export interface AppProps {
	api: Api
	app: string
}

export const App: React.SFC<AppProps> = ({ api, app }) => (
	<FetchData api={api}>
		{({ filters, items, setFilters }) => (
			<div>
				<Filters app={app} filters={filters} setFilters={setFilters} />
				<ItemList filters={filters} items={items} />
			</div>
		)}
	</FetchData>
)
