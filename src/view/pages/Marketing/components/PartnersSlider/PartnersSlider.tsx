import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import { partners } from '../../data';

import './PartnersSlider.scss';

export const PartnersSlider = () => {
	return (
		<div className="partners-slider rinzo-swiper rinzo-swiper--relative-buttons">
			<div className="partners-slider__header">
				<h2 className="title partners-slider__header_title">Partners</h2>
				<div className="partners-slider__header_buttons">
					<div id="prev" className="swiper-button-prev" />
					<div id="next" className="swiper-button-next" />
				</div>
			</div>
			<Swiper
				pagination={{
					clickable: true,
				}}
				navigation={{
					prevEl: '#prev',
					nextEl: '#next',
				}}
				modules={[Pagination, Navigation, Autoplay]}
				breakpoints={{
					320: {
						slidesPerView: 'auto',
						spaceBetween: 0,
						loopedSlides: 4,
					},
					1300: {
						slidesPerView: 4,
						spaceBetween: 69,
						loopedSlides: 4,
					},
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				className="rinzo-swiper--small"
			>
				{partners.map(el => {
					return (
						<SwiperSlide key={`partners-${el.id}`}>
							<a
								className="partners-slider__item"
								href={el.url}
								target="_blank"
								rel="noreferrer"
							>
								<img src={el.image} />
							</a>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};
