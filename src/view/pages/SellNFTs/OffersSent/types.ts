export type tOffersSentRow = {
  id: number;
  item: {
    imageUrl: string;
    name: string;
    collection: {
      name: string;
      slug: string;
    };
  };
  markets: {
    image: string;
    url: string;
    title: string;
    time: string;
  }[];
  expiration_time: string;
  floor_difference: {
    usd: number;
    eth: number;
    percent: number;
    duration: boolean;
  };
  price_difference: {
    usd: number;
    eth: number;
    percent: number;
    duration: boolean;
  };
  checked?: boolean;
};
