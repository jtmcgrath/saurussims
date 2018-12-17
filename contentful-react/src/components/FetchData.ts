import { combineLatest, Observable } from 'rxjs'
import { map, flatMap } from 'rxjs/operators'
import { withEffects, Aperture } from 'refract-rxjs'

import { ItemProps } from './Item'
import { Api } from '../config/api'
import { AllFilters } from './Filters'

interface RenderData {
	items: ItemProps[]
	filters: AllFilters
	setFilters: (filters: AllFilters) => void
}

export interface FetchDataProps {
	api: Api
	children: (data: RenderData) => JSX.Element
}

const aperture: Aperture<FetchDataProps, JSX.Element> = (
	component,
	{ api, children }
) => {
	const items$ = (component.mount.pipe(
		flatMap(api.fetch)
	) as unknown) as Observable<ItemProps[]>
	const [filters$, setFilters] = component.useEvent('filters', {
		download: false,
	})

	return combineLatest(filters$, items$).pipe(
		map(([filters, items]) =>
			children({
				items,
				filters,
				setFilters,
			})
		)
	)
}

export const FetchData = withEffects(aperture)()
