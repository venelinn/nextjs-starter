import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
	Zoom,
} from "swiper";
import Section from "@/components/Section";
import useWindowSize from "@/hooks/useWindowSize";
import useReduceMotion from "@/hooks/useReduceMotion";
import { SliderItem } from "@/components/Slider/SliderItem";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import styles from "@/components/Slider/Slider.module.scss";

const SliderWrapper = ({ items, variant, itemsPerView }) => {
	const reduceMotion = useReduceMotion();
	const swiperConfig = {
		modules: [Keyboard, Pagination, Navigation, Zoom, Mousewheel],
		keyboard: {
			enabled: true,
		},
		speed: reduceMotion ? 1 : 400,
		// zoom: variant != "blog" ? true : false,
		loop: true,
		spaceBetween: 20,
		slidesPerView: itemsPerView || 4,
	};

  return (
		<Section
      data-js="section-slider"
			data-slider={variant}
			classNames={{
				inner: styles.inner,
			}}
    >
				<Swiper {...swiperConfig} navigation={{ prevEl: `.swiper-prev-${variant}`, nextEl: `.swiper-next-${variant}` }}>
					{items.map((item, index) => (
						<SwiperSlide key={index}>
							<SliderItem data={item} variant={variant} />
						</SwiperSlide>
						))}
					<div className="swiper-pagination" />
				</Swiper>
			<div className={`swiper-prev swiper-button-prev swiper-prev-${variant}`} />
			<div className={`swiper-next swiper-button-next swiper-next-${variant}`} />
		</Section>
  );
};

SliderWrapper.propTypes = {
	items: PropTypes.array.isRequired,
	variant: PropTypes.oneOf(["blog", "images", "testimonial"]),
};

SliderWrapper.defaultProps = {
	variant: "images",
};

export default SliderWrapper;
export { SliderWrapper };
