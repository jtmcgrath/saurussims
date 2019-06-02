const downloadsPage = {
	contentType: 'download',
	className: 'page-Downloads',
	tou: true,
	filters: [
		{ label: 'All' },
		{
			label: 'Create A Sim',
			icon: 'child',
			tags: ['cas'],
			greedy: true,
			filters: [
				{
					flat: true,
					filters: [
						{ label: 'All' },
						{ label: 'Male', tags: ['male'], icon: 'mars' },
						{ label: 'Female', tags: ['female'], icon: 'venus' },
						{
							label: 'Kids',
							tags: ['child', 'toddler'],
							icon: 'cubes',
						},
					],
				},
				{
					flat: true,
					filters: [
						{ label: 'All' },
						{
							label: 'Clothes',
							tags: ['clothes'],
							icon: 'restroom',
						},
						{ label: 'Tops', tags: ['tops'], icon: 'tshirt' },
						{ label: 'Bottoms', tags: ['bottoms'], icon: 'male' },
						{ label: 'Outfits', tags: ['outfits'], icon: 'female' },
						{
							label: 'Accessories',
							tags: ['accessories'],
							icon: 'shopping-bag',
						},
						{
							label: 'Shoes',
							tags: ['shoes'],
							icon: 'shoe-prints',
						},
						{ label: 'Hats', tags: ['hats'], icon: 'hat-wizard' },
						{ label: 'Hair', tags: ['hair'], icon: 'cut' },
					],
				},
			],
		},
		{ label: 'Buy Mode', tags: ['objects'], icon: 'couch' },
	],
}

const resourcesPage = {
	contentType: 'resource',
	className: 'page-Resources',
	filters: [
		{ label: 'All' },
		{ label: 'Genetics', tags: ['genetics'] },
		{ label: 'Eyes', tags: ['eyes'] },
		{ label: 'Makeup', tags: ['make-up'] },
		{ label: 'Poses', tags: ['poses'] },
		{ label: 'Skin Details', tags: ['skin-details'] },
		{ label: 'Mods', tags: ['mods'] },
	],
}

const simsPage = {
	contentType: 'sim',
	className: 'page-Sims',
	toggles: ['download', 'imgur'],
	greedy: true,
	tou: true,
	filters: [
		{
			flat: true,
			filters: [
				{ label: 'All' },
				{ label: 'Male', tags: ['male'], icon: 'mars' },
				{ label: 'Female', tags: ['female'], icon: 'venus' },
			],
		},
		{
			flat: true,
			filters: [
				{ label: 'All' },
				{ label: 'Adults', tags: ['adult'], icon: 'graduation-cap' },
				{ label: 'Kids', tags: ['child', 'toddler'], icon: 'cubes' },
				{ label: 'Animals', tags: ['animal'], icon: 'paw' },
				{ label: 'Occult', tags: ['occult'], icon: 'ghost' },
			],
		},
	],
}

export default {
	accessToken: 'ACCESSTOKEN',
	entryPoints: [downloadsPage, resourcesPage, simsPage],
	spaceId: 'SPACEID',
	itemsPerPage: 24,
}
