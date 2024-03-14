import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import { tAccount } from 'src/typed/types';
import { tAchievements } from '../../types';

import { Trophy } from '../Trophy';

interface IProps {
	achievements: tAchievements;
	account: tAccount;
}

export const AchievementsPopUp: FC<IProps> = ({ achievements, account }) => {
	const { cooler_when, achievements_recieved, achievements_upcomming } = achievements;
	return (
		<div className="achievement-popup">
			<div className="achievement-popup__content">
				<div
					className="achievement-popup__content_image"
					style={{ backgroundImage: `url(${account.image})` }}
				>
					<h4 className="achievement-popup__content_image-count">
						{achievements_recieved.length}
					</h4>
				</div>
				<h2 className="achievement-popup__content_title">
					You are cooler than {cooler_when}% of users!
				</h2>
				<div className="achievement-popup__content_subtitle">
					You have earned new trophies!
				</div>
				{achievements_recieved.length > 0 && (
					<div className="achievement-popup__content_tophies">
						<h6>Your Tophies</h6>
						<div className="achievement-popup__content_tophies-column">
							{achievements_recieved.map(el => {
								return (
									<div
										className="achievement-popup__content_tophies-column-item"
										key={`trophy-${el.id}`}
									>
										<Trophy trophy={el} className="trophy--small" />
									</div>
								);
							})}
						</div>
					</div>
				)}
				{achievements_upcomming.length > 0 && (
					<div className="achievement-popup__content_tophies">
						<h6>Upcoming...</h6>
						<div className="achievement-popup__content_tophies-slider rinzo-swiper rinzo-swiper--small">
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
										slidesPerView: 5,
										spaceBetween: 16,
									},
								}}
								className="rinzo-swiper--small"
							>
								{achievements_upcomming.map(el => {
									return (
										<SwiperSlide key={`trophy-${el.id}`}>
											<Trophy trophy={el} className="trophy--progress" />
										</SwiperSlide>
									);
								})}
							</Swiper>
							<div
								id="prev"
								className="swiper-button-prev swiper-button-prev--small"
							/>
							<div
								id="next"
								className="swiper-button-next swiper-button-next--small"
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
