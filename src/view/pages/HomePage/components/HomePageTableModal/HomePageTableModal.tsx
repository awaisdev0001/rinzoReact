import { FC } from 'react';
import { GrayCopyIcon, TwitterIcon, IconEther, IconRedirect } from 'src/assets/icons';
import { HomePageTableModalCollections } from './HomePageTableModalCollections';
import { HomePageTableModalItems } from './HomePageTableModalItems';

import './HomePageTableModal.scss';
import { BaseButton } from 'src/view/components';

export const HomePageTableModal: FC = () => {
	return (
		<div className="sweep__table__modal">
			<div className="sweep__table__modal-upper">
				<div className="sweep__table__modal-upper-left">
					<p className="sweep__transaction__time">2 min ago</p>
					<BaseButton
						className="button button--icon button--icon button--outline button--outline-m button--outline-transparent button--outline-transparent-primary"
						text="View Transaction"
						icon={<IconRedirect />}
						onClick={() => {
							alert('View Transaction');
						}}
					/>
				</div>
				<div className="sweep__table__modal-upper-right">
					<BaseButton
						className="button button--icon button--icon-s button--icon-secondary button--icon-right button--outline button--outline-sx button--outline-sx-partwidth button--outline-secondary"
						text="Share"
						icon={<TwitterIcon />}
						onClick={() => {
							alert('Share');
						}}
					/>
					<BaseButton
						className="button button--icon button--icon-s button--icon button--icon-right button--outline button--outline-sx button--outline-sx-partwidth button--outline-secondary"
						text="Copy Link"
						icon={<GrayCopyIcon />}
						onClick={() => {
							alert('Copy Link');
						}}
					/>
				</div>
			</div>
			<div className="sweep__table__modal__short-wrap">
				<div className="sweep__table__modal__short-wrap-desc">
					<h5>
						3 items bought for
						<span className="sweep__desc_etherIcon">
							<IconEther />
						</span>
						<span className="sweep__desc_price">1.003</span>
						<span className="sweep__desc_percent">+0.003</span>
					</h5>
					<h5 className="tablet-medium">by gmi-capital.eth</h5>
				</div>
			</div>
			<HomePageTableModalCollections />
			<HomePageTableModalItems />
		</div>
	);
};
