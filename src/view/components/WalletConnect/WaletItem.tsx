import { FC } from 'react';
import { IconLoader, IconRight } from 'src/assets/icons';
import { tWalletItem } from './types';
import { useAppSelector } from 'src/hooks';

interface IProps {
	item: tWalletItem;
	loading: boolean;
	onChooseItem: () => any | void;
}

export const WalletItem: FC<IProps> = ({ onChooseItem, loading, item }) => {
	const { imageUrl, name, tag } = item;
	const { themeMode } = useAppSelector(state => state.themeReducer);

	return (
		<button className="wallets-list__item" onClick={() => onChooseItem()} disabled={loading}>
			{loading ? (
				<div>
					<span className="loader-icon">
						<IconLoader />
					</span>
					<h5>Connecting...</h5>
				</div>
			) : (
				<>
					<div>
						<img src={imageUrl} alt="" />
						<h5>{name}</h5>
					</div>
					<div>
						{tag ? (
							<div className={`popular-tag popular-tag--${themeMode}-green`}>
								{<span>{tag}</span>}
							</div>
						) : (
							false
						)}
						<IconRight className="icon" />
					</div>
				</>
			)}
		</button>
	);
};
