import { rinzoCdnURL } from "src/config";

export const getNFTimages = (contract_address: string, token_id: string) => {
  return `${rinzoCdnURL}/${contract_address}/${token_id}/image`;
};

export const getNFTanimations = (
  contract_address: string,
  token_id: string
) => {
  return `${rinzoCdnURL}/${contract_address}/${token_id}/animation`;
};

export const getNFTdata = (contract_address: string, token_id: string) => {
  return `${rinzoCdnURL}/${contract_address}/${token_id}/data`;
};
