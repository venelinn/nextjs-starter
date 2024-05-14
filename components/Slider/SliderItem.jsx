import Markdown from "markdown-to-jsx";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import { en, frCA } from "date-fns/locale"; // Import the locale data
import { Heading } from "@/components/Headings/Heading";
import styles from "@/components/Slider/SliderItem.module.scss";
import FormattedDate from "@/utils/DateFormat"; // Import the FormattedDate component

const SliderItem = ({ data, variant, locale }) => {
	const { heading, date, content, excerpt, image, name } = data;

	const year = <FormattedDate dateStr={date} locale={locale} includeYear={false} />;
	const fullDate = <FormattedDate dateStr={date} locale={locale} />;

	const imageSrc = data?.image?.[0];
	const imageWidth = imageSrc?.width;
	const imageHeight = imageSrc?.height;

  return (
    <div data-is-portrait={imageHeight > imageWidth} className={cx(styles.slide, {
			[styles[`slide--${variant}`]]: variant,
			[`variant-${variant}`]: variant,
			// imageClass,
		})}>
		{date && variant === "blog" && <small>{fullDate}</small>}
		{image && (
			<Image
				src={data?.image[0].src}
				alt={data?.image[0].alt}
				width={data?.image[0].width}
				height={data?.image[0].height}
				className={styles.slider__image}
			/>
		)}
		<div className={styles.slider__container}>
			{heading?.heading && (
				<div className={styles.title__wrapper}>
					{date && variant === "images" && <strong className={styles.year}>{year}</strong>}
					<Heading
						as={heading?.as}
						size={heading?.size}
						className={styles.slider__title}
						uppercase={false}
					>{heading.heading}</Heading>
				</div>
			)}
			{variant !== "images" && (
				<Markdown
					options={{ forceBlock: true }}
					className={styles.slider__content}
					>
					{excerpt}
				</Markdown>
			)}
			{name?.fullName && (
				<div className={styles.slider__info}>
					<p className={styles.slider__info__name}>{name.fullName}</p>
					<span>{name.position}</span>
				</div>
			)}
		</div>
		{data?.link && data?.link?.url && (
			<Link href={data.link.url}>
				<span className="sr-only">{data.link.label}</span>
			</Link>
		)}
		</div>
  );
};

SliderItem.defaultProps = {
	title: null,
};

export default SliderItem;
export { SliderItem }
