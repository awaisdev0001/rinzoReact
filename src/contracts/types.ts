export type tListing = {
  token_id: string;
  contract_address: string;
  payment_token: string;
  quantity: number;
  exchange: "opensea" | "blur" | "x2y2" | "looksrare";
  price_wei: string;
  expires_at: Date;
};
