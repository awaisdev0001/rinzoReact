import { tBaseSelect } from 'src/typed/types';

export const column = [
	{
		key: 'item',
		name: 'Item',
		isSort: false,
	},
	{
		key: 'rank',
		name: 'Rank',
		isSort: true,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{ key: 'empty', name: '', isSort: false, align: 'left', collumnClassName: 'mobile-hidden' },
	{
		key: 'rarity_score',
		name: 'Rarity Score',
		isSort: true,
		align: 'left',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'price',
		name: 'Price',
		isSort: true,
		align: 'center',
	},
	{
		key: 'event_type',
		name: 'Event Type',
		isSort: false,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'date',
		name: 'Date',
		isSort: true,
		align: 'center',
		collumnClassName: 'mobile-hidden',
	},
	{
		key: 'individual-type',
		name: '',
		isSort: false,
		align: 'center',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'transaction',
		name: '',
		isSort: false,
		align: 'center',
		collumnClassName: 'tablet-hidden',
	},
	{
		key: 'empty2',
		name: '',
		isSort: false,
		collumnClassName: 'tablet-mobile-visible',
	},
];

export const selectData: tBaseSelect = [
	// { title: 'Rank (Top to Base)', key: 'rank_top_base' },
	// { title: 'Rank (Base to Top)', key: 'rank_base_top' },
	// { title: 'Rarity Score (Common to Rarest)', key: 'rarity_score_common_rarest' },
	// { title: 'Rarity Score (Rarest to Common)', key: 'rarity_score_rarest_common' },
	{ title: 'Price (High to Low)', key: 'price_high_low' },
	{ title: 'Price (Low to High) ', key: 'price_low_high' },
	{ title: 'Date (Oldest to Newest)', key: 'date_oldest_newest' },
	{ title: 'Date (Newest to Oldest)', key: 'date_newest_oldest' },
];
