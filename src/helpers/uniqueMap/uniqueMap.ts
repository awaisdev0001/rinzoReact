export const uniqueBy = (arr: any[], prop: string) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return [...new Map(arr.map(m => [m[prop], m])).values()];
};
