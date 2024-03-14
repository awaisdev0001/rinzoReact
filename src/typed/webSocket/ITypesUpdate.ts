export interface ITypesUpdate {
    type: string;
    activity: [
        {
            id: number;
            item: {
                imageUrl: string;
                name: string;
            };
            rank: number;
            rarity_score: number;
            price: {
                eth: number;
                usd: number;
            };
            event_type: string;
            day: string;
        }
    ];

    listings: [
        {
            id: number;
            name: string;
            imageUrl: string;
            rank: number;
            score: number;
            priceETH: number;
            priceUSD: number;
            estimatedPriceUSD: number;
            estimatedPriceETH: number;
            estimatePercent: {
                duration: boolean;
                value: number;
            };
            checked: boolean;
            collection: {
                slug: string;
                name: string;
                contract_address: string;
                token_id: number;
            };
            hasValue: boolean;
            expiry: string;
        }
    ];
}
