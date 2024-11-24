import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			title: 'Home',
			link: '/',
		},
		{
			icon: 'MdExplore',
			title: 'Discovery',
			link: '/genres',
		},
		{
			icon: 'MdRefresh',
			title: 'Fresh Movies',
			link: '/fresh',
		},
		{
			icon: 'MdLocalFireDepartment',
			title: 'Trending Now',
			link: '/trending',
		},
	],
}

export const userMenu: IMenu = {
	title: 'General',
	items: [],
}
