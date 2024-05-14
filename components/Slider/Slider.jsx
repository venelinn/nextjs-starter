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
import Button from "@/components/Button/Button";
import styles from "@/components/Slider/Slider.module.scss";

const Slider = ({ items, variant, itemsPerView, heading, subHeading, link}) => {
	const reduceMotion = useReduceMotion();
	const swiperConfig = {
		modules: [Keyboard, Pagination, Navigation, Zoom, Mousewheel],
		keyboard: {
			enabled: true,
		},
		speed: reduceMotion ? 1 : 400,
		// zoom: variant != "blog" ? true : false,
		loop: false,
		spaceBetween: variant === "horizontal" ? 0 : 20,
		// slidesPerView: itemsPerView,
		breakpoints: (() => {
			switch (itemsPerView) {
				case 1:
        return {
          480: {
            slidesPerView: 1,
          },
        };
				case 2:
					return {
						600: {
							slidesPerView: 1,
						},
						900: {
							slidesPerView: 2.1,
						},
					};
				case 3:
					return {
						480: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3.1,
						},
					};
				case 4:
					return {
						480: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4.1,
						},
					};
			}
		})(),
	};

  return (
		<Section
      data-js="section-slider"
			data-slider={variant}
			size="full"
			classNames={{
				inner: styles.inner,
				heading: styles.inner__heading,
				subHeading: styles.inner__subHeading,

			}}
			subHeading={subHeading}
			heading={heading}
    >
			<div className={styles.slider__wrapper}>
				<Swiper {...swiperConfig} navigation={{ prevEl: `.swiper-prev-${variant}`, nextEl: `.swiper-next-${variant}` }}>
					{items.map((item, index) => (
						<SwiperSlide key={index}>
							<SliderItem data={item} variant={item?.variant || variant} />
						</SwiperSlide>
						))}
					<div className="swiper-pagination" />
				</Swiper>
				<div className={`swiper-prev swiper-button-prev swiper-prev-${variant}`} />
				<div className={`swiper-next swiper-button-next swiper-next-${variant}`} />
			</div>
			{link && link?.url && (
				<Button
					href={link.url}
					label={link?.title}
					wrapperClassName={styles.grid__button__wrapper}
				/>
			)}
		</Section>
  );
};

Slider.propTypes = {
	items: PropTypes.array.isRequired,
	variant: PropTypes.oneOf(["blog", "images", "testimonial", "horizontal"]),
};

Slider.defaultProps = {
	variant: "images",
};

export default Slider;
export { Slider };
