export const toTimeString = (date: Date | string) => {
  const date1 = typeof date === "string" ? new Date(date) : date;
  return `${date1.getHours().toString().padStart(2, "0")}:${date1
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date1.getSeconds().toString().padStart(2, "0")}`;
};
