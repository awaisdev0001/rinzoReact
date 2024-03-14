export const getSortBy = (selectKey: string) => {
  const map: { [key: string]: string } = {
    recently_acquired: "time",
    price_hight_low: "price",
    price_low_hight: "price",
    rarity : "rank",
    by_floor: "time",
    by_volume: "time",
  };
  return map[selectKey];
};

export const getSortOrder = (selectKey: string) => {
  const map: { [key: string]: "asc" | "desc" } = {
    recently_acquired: "desc",
    price_hight_low: "desc",
    price_low_hight: "asc",
    rarity : "desc",
    by_floor: "asc",
    by_volume: "asc",
  };
  return map[selectKey];
};
