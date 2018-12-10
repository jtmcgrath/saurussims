import React from 'react'

export interface AllFilters {
	[key: string]: boolean
	download: boolean
}

export interface FiltersProps {
	app: string
	filters: AllFilters
	setFilters: SetFilters
}

type SetFilters = (val: AllFilters) => any
type GetFilters = (app: string) => string[]
type MaybeElement = JSX.Element | null

type RenderInput = (
	setFilters: SetFilters,
	filters: AllFilters,
	filter: string,
	label: JSX.Element
) => MaybeElement

type RenderFilter = (
	setFilters: SetFilters,
	filters: AllFilters
) => (filter: string) => MaybeElement

const getFilters: GetFilters = app => {
	switch (app) {
		case 'download': {
			return []
		}

		case 'sim': {
			return ['download']
		}

		default: {
			return []
		}
	}
}

const renderCheckbox: RenderInput = (setFilters, filters, filter, label) => (
	<div key={filter}>
		<input
			type="checkbox"
			id={filter}
			checked={filters[filter]}
			onChange={() =>
				setFilters({ ...filters, [filter]: !filters[filter] })
			}
		/>
		{label}
	</div>
)

const renderFilter: RenderFilter = (setFilters, filters) => filter => {
	switch (filter) {
		case 'download': {
			return renderCheckbox(
				setFilters,
				filters,
				filter,
				<label htmlFor="download">Download</label>
			)
		}

		default: {
			return null
		}
	}
}

export const Filters: React.SFC<FiltersProps> = ({
	app,
	filters,
	setFilters,
}) => {
	const visible = getFilters(app)

	if (!visible.length) {
		return null
	}

	return (
		<div className="items-filters">
			{visible.map(renderFilter(setFilters, filters))}
		</div>
	)
}
