export const splitAddress = (address?: string) => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const splitAddressInHalf = (address?: string) => {
  if (!address) return "";
  return `${address.slice(0, 5)}...${address.slice(-5)}`;
};
