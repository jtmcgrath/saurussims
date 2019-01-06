const downloadsPage = {
	contentType: 'download',
	className: 'page-Downloads',
	filterByDownloads: true,
	filters: [
		{ label: 'Buy Mode', tags: ['objects'] },
		{
			label: 'Create A Sim',
			category: 'group',
			tags: ['cas'],
			greedy: true,
			filters: [
				{
					filters: [
						{ label: 'All' },
						{ label: 'Male', tags: ['male'] },
						{ label: 'Female', tags: ['female'] },
						{ label: 'Kids', tags: ['child', 'toddler'] },
					],
				},
				{
					filters: [
						{ label: 'All' },
						{ label: 'Clothes', tags: ['clothes'] },
						{ label: 'Tops', tags: ['tops'] },
						{ label: 'Bottoms', tags: ['bottoms'] },
						{ label: 'Outfits', tags: ['outfits'] },
						{ label: 'Accessories', tags: ['accessories'] },
						{ label: 'Shoes', tags: ['shoes'] },
						{ label: 'Hats', tags: ['hats'] },
						{ label: 'Hair', tags: ['hair'] },
					],
				},
			],
		},
	],
}

const simsPage = {
	contentType: 'sim',
	className: 'page-Sims',
	greedy: true,
	filters: [
		{
			label: 'Gender',
			filters: [
				{ label: 'All' },
				{ label: 'Male', tags: ['male'] },
				{ label: 'Female', tags: ['female'] },
			],
		},
		{
			label: 'Type',
			filters: [
				{ label: 'Adults', tags: ['adult'] },
				{ label: 'Kids', tags: ['child', 'toddler'] },
				{ label: 'Animals', tags: ['animals'] },
				{ label: 'Occult', tags: ['occult'] },
			],
		},
	],
}

export default {
	accessToken: 'ACCESSTOKEN',
	entryPoints: [downloadsPage, simsPage],
	spaceId: 'SPACEID',
	itemsPerPage: 24,
}
