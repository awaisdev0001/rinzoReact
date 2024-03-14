import { FC } from 'react';
import { FilterSide } from 'src/view/components';
import { useAppSelector } from 'src/hooks';
import { offersReceivedFilterRows } from './data';
import { tCurrency } from 'src/typed/types';

interface IProps {
	changeFilterOpenOption: (arg: boolean) => void;
	openMobile: boolean;
}

export const OffersReceivedFilter: FC<IProps> = ({ changeFilterOpenOption, openMobile }) => {
	const { currency } = useAppSelector(state => state.currencyReducer);
	const data = offersReceivedFilterRows(currency as tCurrency);
	return (
		<>
			<FilterSide
				data={data}
				changeFilterOpenOption={changeFilterOpenOption}
				openMobile={openMobile}
			/>
		</>
	);
};
