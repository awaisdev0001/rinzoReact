import { OrderWithCounter } from "@opensea/seaport-js/lib/types";

export as namespace OpenSea;

export type tOpenseaOrder = {
  listing_time: number;
  expiration_time: number;
  order_hash: string;
  protocol_data: OrderWithCounter;
  current_price: string;
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  client_signature: string;
};
