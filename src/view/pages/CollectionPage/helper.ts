export const getSortBy = (selectKey: string) => {
  const map: { [key: string]: string } = {
    rare_to_common: "rank",
    common_to_rare: "rank",
    low_hight: "price",
    hight_low: "price",
    recently_listed: "time",
  };
  return map[selectKey];
};

export const getSortOrder = (selectKey: string) => {
  const map: { [key: string]: string } = {
    rare_to_common: "asc",
    common_to_rare: "desc",
    low_hight: "asc",
    hight_low: "desc",
    recently_listed: "desc",
  };
  return map[selectKey];
};
