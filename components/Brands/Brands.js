import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import cx from "classnames";
import Image from "next/image";
import { gsap } from "gsap";
import { Carousel } from "../../utils/common";
import styles from "@/components/Brands/Brands.module.scss";

const Brands = ({ items, autoplay, labels }) => {
	const { isMobile } = useWindowSize();
	const [activeBrand, setActiveBrand] = useState(null);
	const [inActiveBrand, setInActiveBrand] = useState(null);
	const [inActiveImage, setInActiveImage] = useState(null);
	const carouselManager = useRef();

	const [brand, setBrand] = useState({
		active: false,
		color: null,
		image: null,
		optImage: null,
		animate: false,
	});

	const brandsAnimation = () => {
		gsap.from("[data-anim='brands'] li", {
      duration: 1.5,
      opacity: 0,
      delay: 1,
      y: 20,
			scale: 1.1,
      stagger: 0.1,
      ease: "power4.inOut",
    });
  }
	useEffect(() => {
    brandsAnimation();
  }, []);

	const brandAnimation = () => {
		gsap.fromTo(
			"[data-anim='brand-overlay-current']",
			{
				duration: 1,
				opacity: 0,
				ease: "power4.inOut",
			},
			{
				duration: 1,
				opacity: 1,
			},
		);

		gsap.to("[data-anim='brand-overlay-previous']", {
			duration: 5,
			opacity: 0,
			ease: "power4.inOut",
		});
	};

	const exitAnimation = () => {
		gsap
			.to("[data-anim='brand-overlay-current']", {
				duration: 1,
				opacity: 0,
				ease: "power4.inOut",
			})
			.eventCallback("onComplete", () => {});
	};

	const getOptimizedImage = (image, height) => {
		let imageSrc = image?.image?.[0]?.src;
		let needsCropping = null;

		if (imageSrc) {
			needsCropping = /\/v[\d]+\//.test(imageSrc);
		}

		if (needsCropping) {
			const getMatch = imageSrc.match(/\/(v[\d]+)\//);
			imageSrc = imageSrc.replace(getMatch[1], height);
		}

		return imageSrc || null;
	};

	const handleMouseEnter = (item, index) => {
		carouselManager.current.methods.pause();

		if (activeBrand !== inActiveBrand) {
			setInActiveBrand(activeBrand);
		}

		// Set active state for brand element
		setActiveBrand(index);
		setInActiveImage(getOptimizedImage(items[index].image, "h_842"));
		document.querySelector(`[data-anim='brands'] li:nth-of-type(${index + 1})>span`).focus();

		setBrand({
			active: true,
			color: item.color,
			image: item.image,
			optImage: getOptimizedImage(item.image, "h_842"),
			animate: true, // Set animate flag to true when hovering
		});
	};

	const handleMouseLeave = () => {
		setBrand({
			...brand,
			animate: false, // Set animate flag to false when leaving
		});
	};

	// Init animation
	useEffect(() => {
		if (carouselManager.current) {
			carouselManager.current.methods.destroy();
			carouselManager.current = undefined;
		}

		carouselManager.current = new Carousel({
			autoplay,
			ulSelector: "[data-anim='brands']",
			liSelector: "[data-anim='brands'] li",
			data: items,
			onInitUpdate: () => {},
			onAutoplayUpdate: ({ index, item, items, init }) => {
				const lastIndex = index - 2 < 0 ? items.length - 1 : index - 2;

				if (!init) {
					setInActiveBrand(lastIndex);
					setInActiveImage(getOptimizedImage(items[lastIndex].image, "h_842"));
				}

				setActiveBrand(index - 1);

				setBrand({
					active: true,
					color: item.color,
					image: item.image,
					optImage: getOptimizedImage(item.image, "h_842"),
					animate: true, // Set animate flag to true when hovering
				});
			},
		});

		carouselManager.current.methods.init();

		() => {
			carouselManager.current?.methods.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (brand.animate) {
			brandAnimation(); // Animation when company.animate changes
		} else {
			exitAnimation(); // Call the exit animation when company.animate becomes false
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [brand]);


	return (
		<>
			{items?.[inActiveBrand] && (
				<div
					data-active={brand.active}
					className={styles.brandOverlay}
					data-anim="brand-overlay-previous"
					style={{ "--company-bgr": `${items[inActiveBrand].color}` }}
				>
					<Image
						src={inActiveImage}
						alt={items[inActiveBrand].image?.alt}
						width={items[inActiveBrand].image?.image[0]?.width}
						height={items[inActiveBrand].image?.image[0]?.height}
					/>
				</div>
			)}

			<div
				data-active={brand.active}
				className={styles.brandOverlay}
				data-anim="brand-overlay-current"
				style={{ "--company-bgr": `${brand.color}` }}
			>
				{brand.optImage && (
					<Image
						data-anim="currentBrand"
						src={brand.optImage}
						alt={brand.image?.alt}
						width={brand.image?.image[0]?.width}
						height={brand.image?.image[0]?.height}
					/>
				)}
			</div>

			<ul className={styles.brands} data-anim="brands" style={{ opacity: 0, zIndex: -1 }}>
				{items?.map((item, index) => (
					<li key={index}>
						<span
							aria-current={activeBrand === index}
							title={item.name}
							data-color={item.color}
							data-invert={item.logo?.invert}
							data-text-hover={labels?.visit}
							className={cx(styles.brands__item, activeBrand === index ? styles.active : null, {
								[styles["brands__item--with-link"]]: item?.link,
							})}
							style={item.color ? { "--brand-bgr": `var(--color-${item.color})` } : null}
							role="button"
							onClickCapture={() => {
								if (item?.link) {
									window.open(item.link, item?.target || "_parent");
								}
							}}
							tabIndex={0}
							onMouseEnter={() => handleMouseEnter(item, index)}
							onMouseLeave={handleMouseLeave}
							onClick={() => isMobile && handleMouseEnter(item, index)}
							onFocus={() => handleMouseEnter(item, index)}
						>
							<Image
								src={item.logo?.image[0]?.src}
								alt={item.logo?.alt}
								width={item.logo.image[0]?.width}
								height={item.logo.image[0]?.height}
								className={styles.brands__logo}
							/>
						</span>
					</li>
				))}
			</ul>
		</>
	);
};

export default Brands;
export { Brands };
