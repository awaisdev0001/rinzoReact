/**
 * Removes Zeros from ahead.
 * 
 * @param arg number | undefined | string
 * @returns 
 */
export const excludeZeroAhead = (arg: number | undefined | string) => {
  const re = /^(?:[1-9]\d*|0)?(?:\.\d+)?$/;
  
	if (arg) {
		if (re.test('' + arg)) {
			return arg;
		} else {
			return ('' + arg).replace(/^0+/, '');
		}
	}
};
