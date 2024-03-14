import { FC, useState } from 'react';

import { InputBase, InputAdornment } from '@mui/material';
import { IconClose, IconInfo, IconLoader, IconRight, IconSearch } from 'src/assets/icons';

import { splitAddress } from 'src/helpers';
import { useAppSelector } from 'src/hooks';
import './Autocomplete.scss';
interface IProps {
	placeholder: string;
	search: (arg: any) => void;
	searchValue: string;
	loading: boolean;
	result: any;
	isEmpty: boolean;
	closeSearch?: (arg: any) => void;
}

export const Autocomplete: FC<IProps> = ({
	placeholder,
	search,
	searchValue,
	loading,
	result,
	isEmpty,
	closeSearch,
}) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	const [focus, setFocus] = useState<boolean>(false);

	return (
		<div className={`autocomplete autocomplete--${themeMode}`}>
			<div className="autocomplete__input">
				<button className="autocomplete__input_icon-back" onClick={closeSearch}>
					<IconRight className="icon-rotate--180" />
				</button>
				<InputBase
					className="mui-input mui-input--icon"
					placeholder={placeholder}
					inputProps={{ 'aria-label': placeholder }}
					endAdornment={
						<InputAdornment position="end">
							{searchValue ? (
								<>
									<button
										onClick={() => {
											search('');
										}}
										className="icon-btn"
									>
										<IconClose />
									</button>
								</>
							) : (
								<span className="icon-btn">
									<IconSearch width="16" height="16" className="icon" />
								</span>
							)}
						</InputAdornment>
					}
					onBlur={() => setFocus(false)}
					onClick={() => setFocus(true)}
					onChange={e => {
						search(e.target.value);
						setFocus(true);
					}}
					value={searchValue}
				/>
			</div>
			<div className={`autocomplete__content ${focus && 'autocomplete__content--active'}`}>
				{loading ? (
					<div className="autocomplete__content_body autocomplete__content_body--loading">
						<IconLoader />
					</div>
				) : (
					<div className="autocomplete__content_body">
						{isEmpty && (
							<div className="autocomplete__content_empty-list">
								<IconInfo className="icon" />
								<p>There isn’t any matches for your search</p>
							</div>
						)}
						{Object.keys(result).map((item, i) => (
							<ul key={i} className="autocomplete__content_list">
								<p
									className={`autocomplete__content_list-title ${item === 'nft'
											? 'autocomplete__content_list-title--uppercase'
											: ''
										}`}
								>
									{item.replace(/_/, ' ')} ({result[item].length})
								</p>
								{result[item].map((el: any) => {
									return (
										<li
											className="autocomplete__content_list-item"
											key={`${item}-${el.name}`}
										>
											<span
												className="item-image"
												style={{ backgroundImage: `url(${el.imageUrl})` }}
											/>
											<p className={!el.name ? 'item-address' : ''}>
												{el.name || splitAddress(el.address)}
											</p>
											{el.totalSupply && (
												<span className="item-count">{el.totalSupply}</span>
											)}
										</li>
									);
								})}
							</ul>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
