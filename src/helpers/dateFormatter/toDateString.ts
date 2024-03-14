export const toDateString = (date: Date | string) => {
  const date1 = typeof date === "string" ? new Date(date) : date;
  return `${(date1.getMonth() + 1).toString().padStart(2, "0")}/${date1
    .getDate()
    .toString()
    .padStart(2, "0")}/${date1.getFullYear()}`;
};
