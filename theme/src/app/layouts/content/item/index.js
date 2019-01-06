import * as variants from './variants'

export default function renderItem(item) {
	return variants[item.type]
		? variants[item.type](item)
		: variants.download(item)
}
