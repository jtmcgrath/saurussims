import secrets from './secrets'

const downloadsPage = {
	contentType: 'download',
	className: 'page-Downloads',
	dataSource: 'contentful',
	tou: true,
	filters: [
		{ label: 'All', retired: 'hide' },
		{
			label: 'Create A Sim',
			icon: 'child',
			tags: ['cas'],
			greedy: true,
			retired: 'hide',
			filters: [
				{
					flat: true,
					filters: [
						{ label: 'All' },
						{ label: 'Male', tags: ['male'], icon: 'mars' },
						{ label: 'Female', tags: ['female'], icon: 'venus' },
						{ label: 'Child', tags: ['child'], icon: 'cubes' },
						{ label: 'Toddler', tags: ['toddler'], icon: 'baby' },
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
		{
			label: 'Buy Mode',
			icon: 'couch',
			tags: ['objects'],
			retired: 'hide',
		},
		{
			label: 'Mods',
			icon: 'wrench',
			tags: ['mods'],
			retired: 'hide',
		},
		{ label: 'Retired', retired: 'only', icon: 'calendar-times' },
	],
}

const resourcesPage = {
	contentType: 'resource',
	className: 'page-Resources',
	dataSource: 'contentful',
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
	dataSource: 'contentful',
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

const morePage = {
	className: 'page-More',
	dataSource: 'local',
	items: [
		{ type: 'resource', link: 'https://www.saurussims.com/tagged/lookbook', title: 'Lookbooks', color: '#78a4d3'},
		{ type: 'resource', link: 'https://ko-fi.com/saurus', title: 'Ko-fi', color: '#f3c55a'},
		{ type: 'resource', link: 'https://www.saurussims.com/ask-away', title: 'Message', color: '#78d2ae'},
		{ type: 'resource', link: 'https://www.saurussims.com/sims', title: 'Sims', color: '#f7c3d2' },
		{ type: 'resource', link: 'https://www.saurussims.com/tagged/wcif', title: 'WCIF', color: '#9681b6' },
		{ type: 'resource', link: 'https://www.saurussims.com/resources', title: 'Resources', color: '#79bcd1' },
	],
}

export default {
	...secrets,
	entryPoints: [downloadsPage, resourcesPage, simsPage, morePage],
	itemsPerPage: 24,
}
