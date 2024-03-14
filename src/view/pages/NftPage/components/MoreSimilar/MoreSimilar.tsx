import { FC } from 'react';
import { EstimatedCardSimple } from 'src/view/components';
import { tCollectionItem } from 'src/typed/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IProps {
	items: tCollectionItem[];
}

export const MoreSimilar: FC<IProps> = ({ items }) => {
	return (
		<div className="rinzo-swiper more-similar">
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
					1199: {
						slidesPerView: 4,
						spaceBetween: 16,
					},
					1399: {
						slidesPerView: 5,
						spaceBetween: 16,
					},
				}}
				className="more-similar"
			>
				{items.map(el => {
					return (
						<SwiperSlide key={`similar-${el.id}`}>
							<EstimatedCardSimple {...el} className="estimated-card--full-width" />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div id="prev" className="swiper-button-prev" />
			<div id="next" className="swiper-button-next" />
		</div>
	);
};
