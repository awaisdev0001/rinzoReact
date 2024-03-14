import { FC, useState, ChangeEvent } from 'react';
import { NftInfoForCart } from '../../NftInfoForCart';
import { InputAdornment, InputBase } from '@mui/material';
import { onlyPositiveDigitsInputHandler, toLocaleUS } from 'src/helpers';
import { IconEther, IconGreenArrowUp } from 'src/assets/icons';
import { CloseButton } from '../../buttons';
import { useAppDispatch, useAppSelector, useWindowSize } from 'src/hooks';
import { removeItemOfSentNFTs } from 'src/store';
import '../CustomTableCart.scss';

interface IProps {
	item: any;
	index: number;
}

export const CustomTableRow: FC<IProps> = ({ item, index }) => {
	const [selectedVal, setSelectedVal] = useState<string>('24');
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const dispatch = useAppDispatch();
	const { width } = useWindowSize();

	const handleValChange = (event: ChangeEvent<HTMLInputElement>) => {
		const limit = 4;
		setSelectedVal(event.target.value.slice(0, limit));
	};

	const removeItem = () => {
		dispatch(removeItemOfSentNFTs(item));
	};

	return (
		<>
			<tr key={item.id + '' + index}>
				<td>
					<NftInfoForCart onRemove={removeItem} item={item} />
				</td>
				{width > 767 && (
					<td className="custom__table__cart__token__num">
						<p>43 Tokens</p>
					</td>
				)}
				<td className="custom__table__cart__middle__body">
					<div className="custom__table__cart__middle__body__input">
						<InputBase
							type="number"
							onKeyDown={onlyPositiveDigitsInputHandler}
							className="mui-input mui-input--simple-s mui-input--icon mui-input--icon-m"
							value={selectedVal}
							onChange={handleValChange}
							endAdornment={
								<InputAdornment className="mui-input-prefix" position="end">
									<p className="prefix-par">selected</p>
								</InputAdornment>
							}
						/>
					</div>
				</td>
				<td className="custom__table__cart__nft__price__eth">
					<h1 className="custom__table__cart__nft__price">
						<IconEther />
						<span>{toLocaleUS(item.priceETH)}</span>
					</h1>
					<h2 className="custom__table__cart__nft__price_dollars">
						${toLocaleUS(item.priceUSD)}
					</h2>
				</td>
				<td className="custom__table__cart__estimated__body">
					{width > 767 && (
						<div
							className={`custom__table__cart__estimated custom__table__cart__estimated--${themeMode}`}
						>
							<h5>Estimated</h5>
							<p>
								<IconEther />
								<span className="estimated__column__eth">104.24</span>
								<IconGreenArrowUp />
								<span className="estimated__column__percent">4%</span>
							</p>
						</div>
					)}
				</td>
				{width < 1200 && (
					<td>
						<div className="custom__table__cart__cancel">
							<CloseButton onClick={() => '{}'} />
						</div>
					</td>
				)}
			</tr>
			{width < 767 && (
				<tr>
					<td colSpan={6}>
						<div
							className={`custom__table__cart__estimated custom__table__cart__estimated--${themeMode}`}
						>
							<h5>Estimated</h5>
							<p>
								<IconEther />
								<span className="estimated__column__eth">104.24</span>
								<IconGreenArrowUp />
								<span className="estimated__column__percent">4%</span>
							</p>
						</div>
					</td>
				</tr>
			)}
		</>
	);
};
