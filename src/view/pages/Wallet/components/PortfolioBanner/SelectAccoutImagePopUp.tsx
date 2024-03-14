import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import { tAccount } from 'src/typed/types';
import { rinzoAvatarts, portfolioNFTS } from '../../data';
import { RinzoAvatar } from '../RinzoAvatar';
import { SmallCard } from 'src/view/components';

import { changeAccountParams } from 'src/store';
import { useAppDispatch } from 'src/hooks';

interface IProps {
	account: tAccount;
}

export const SelectAccoutImagePopUp: FC<IProps> = ({ account }) => {
	const dispatch = useAppDispatch();
	const changeProfileImage = (image: string) => {
		const changedImage = {
			...account,
			image: image,
		};
		dispatch(changeAccountParams({ ...changedImage }));
	};
	return (
		<div className="profile-images-popup">
			<div className="profile-images-popup__content">
				<div
					className="profile-images-popup__content_image"
					style={{ backgroundImage: `url(${account.image})` }}
				/>
				{portfolioNFTS.length > 0 && (
					<>
						<div className="profile-images-popup__content_subtitle">
							Your Profile Picture
						</div>
						<div className="profile-images-popup__content_blocks profile-images-popup__content_blocks--margin">
							<h6 className="profile-images-popup__content_blocks-title">
								Your Portfolio NTFs
							</h6>
							<div className="profile-images-popup__content_blocks-slider rinzo-swiper rinzo-swiper--nft-avatar">
								<Swiper
									pagination={{
										clickable: true,
									}}
									navigation={{
										prevEl: '#nft-prev',
										nextEl: '#nft-next',
									}}
									modules={[Pagination, Navigation]}
									breakpoints={{
										320: {
											slidesPerView: 'auto',
											spaceBetween: 0,
										},
										768: {
											slidesPerView: 3,
											spaceBetween: 14,
										},
									}}
									className="nft-avatar"
								>
									{portfolioNFTS.map(el => {
										return (
											<SwiperSlide key={`item-${el.id}`}>
												<div className="profile-images-popup__content_blocks-porfolio">
													<SmallCard
														name={el.name}
														collection={el.collection}
														imageUrl={el.imageUrl}
														className="estimated-card--full-width"
														onClick={image => {
															changeProfileImage(image);
														}}
													/>
												</div>
											</SwiperSlide>
										);
									})}
								</Swiper>
								<div
									id="nft-prev"
									className="swiper-button-prev swiper-button-prev--20"
								/>
								<div
									id="nft-next"
									className="swiper-button-next swiper-button-next--20"
								/>
							</div>
						</div>
					</>
				)}
				<div className="profile-images-popup__content_blocks">
					<h6 className="profile-images-popup__content_blocks-title">Rinzo Avatars</h6>
					<div className="profile-images-popup__content_blocks-slider rinzo-swiper rinzo-swiper--rinzo-avatar">
						<Swiper
							pagination={{
								clickable: true,
							}}
							navigation={{
								prevEl: '#prev',
								nextEl: '#next',
							}}
							modules={[Pagination, Navigation]}
							breakpoints={{
								320: {
									slidesPerView: 'auto',
									spaceBetween: 0,
								},
								768: {
									slidesPerView: 4,
									spaceBetween: 16,
								},
							}}
							className="rinzo-swiper--rinzo-avatar"
						>
							{rinzoAvatarts.map(el => {
								return (
									<SwiperSlide key={`avatar-${el.id}`}>
										<RinzoAvatar
											item={el}
											onClick={(image: string) => {
												changeProfileImage(image);
											}}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
						<div id="prev" className="swiper-button-prev swiper-button-prev--20" />
						<div id="next" className="swiper-button-next swiper-button-next--20" />
					</div>
				</div>
			</div>
		</div>
	);
};
