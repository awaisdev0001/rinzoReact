export interface NftDataFromCdnUrl {
  name: string;
  image_type: string;
  original_image: string;
  contract_address: string;
  token_id: string;
  traits: {
    trait_type: string;
    value: string;
  }[];
  image: string;
  original_url: string;
}
