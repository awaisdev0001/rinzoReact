export const viewTransaction = (hash: string) => {
  window.open(`https://etherscan.io/tx/${hash}`);
};
