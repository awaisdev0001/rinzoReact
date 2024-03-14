export type tListingRow = {
  id: string | number;
  item: {
    imageUrl: string;
    name: string;
    collection: {
      name: string;
      slug: string;
    };
  };
  markets: { image: string; url: string; title: string; data: string }[];
  last_item_price: {
    usd: number;
    eth: number;
  };
  list_price: {
    price: number;
    usd: number;
    eth: number;
  };
  floor_price: {
    usd: number;
    eth: number;
    percent: number;
    duration: boolean;
  };
  projected_profit: {
    usd: number;
    eth: number;
    percent: number;
    duration: boolean;
  };
  checked?: boolean;
};
