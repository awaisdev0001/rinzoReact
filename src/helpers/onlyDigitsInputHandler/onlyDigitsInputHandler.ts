import { KeyboardEvent } from 'react';

export const onlyPositiveDigitsInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
	const invalidChars = ['-', '+', 'e'];
	if (invalidChars.includes(e.key)) {
		e.preventDefault();
	}
};

export const onlyDigitsInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
	const invalidChars = ['e'];
	if (invalidChars.includes(e.key)) {
		e.preventDefault();
	}
};
