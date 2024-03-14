export const toThousandAbbreviation = (price: number) => {
  if (price > 1000) {
    const thousandAbbreviation = Number(price / 1000).toFixed(2);

    return `${thousandAbbreviation}K`;
  } else return price;
};

export const toLocaleUS = (price: number | string) => {
  return price.toLocaleString("en-US");
};

export const weiToEther = (priceWei: number | string): number => {
  const parsedPriceWei =
    typeof priceWei === "string" ? parseFloat(priceWei) : priceWei;
  return Math.round(parsedPriceWei / 10 ** 13) / 100000;
};
