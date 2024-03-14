import { FC } from 'react';
import { IconEther } from 'src/assets/icons';
import { tSubtotalPayChoice } from 'src/typed/types';
import { useAppSelector } from 'src/hooks';
import './PayWithCartChoice.scss';

interface IProps {
	hasIcon: boolean;
	tokenName: string;
	balance: string;
	choiceType: tSubtotalPayChoice;
	onClick: (arg: tSubtotalPayChoice) => void;
	selectedChoice: tSubtotalPayChoice;
}

export const PayWithCartChoice: FC<IProps> = ({
	hasIcon,
	tokenName,
	balance,
	onClick,
	choiceType,
	selectedChoice,
}) => {
	const { themeMode } = useAppSelector(state => state.themeReducer);

	return (
		<div
			style={
				choiceType === selectedChoice
					? { borderColor: `${themeMode === 'light' ? '#ADCA5C' : '#CFE0A0'}` }
					: {}
			}
			onClick={() => onClick(choiceType)}
			className="pay__with__cart__choice"
		>
			<h1 className="pay__with__cart__choice__token-title">
				{hasIcon && <IconEther />}
				{tokenName}
			</h1>
			<p className="pay__with__cart__choice-par">
				Balance <span className="pay__with__cart__choice-par-span">{balance}</span>
			</p>
		</div>
	);
};
