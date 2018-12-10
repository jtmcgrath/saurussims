import React from 'react'

import { AllFilters } from './Filters'
import { Item, ItemProps } from './Item'
import { SimProps } from './Sim'

export interface ItemListProps {
	filters: AllFilters
	items: ItemProps[]
}

const filterItems = (filters: AllFilters) => (item: ItemProps) => {
	if (filters.download && !(item as SimProps).download) {
		return false
	}

	return true
}

export const ItemList: React.SFC<ItemListProps> = ({ filters, items }) =>
	items.length ? (
		<div className="item-list">
			{items.filter(filterItems(filters)).map(item => (
				<Item key={item.image} {...item} />
			))}
		</div>
	) : (
		<div>Nothing found!</div>
	)
