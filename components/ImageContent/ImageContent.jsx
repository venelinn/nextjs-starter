import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Section from "../Section";
import { BrandsConnector } from "../Brands";
import { Button } from "../Button/Button.jsx";
import styles from "./ImageContent.module.scss";

const ContentSection = ({ content, link } ) => (
	<div data-anim="content-image" className={styles.module__content}>
		<Markdown options={{ forceBlock: true }} data-sb-field-path="body">
			{content}
		</Markdown>
		{link && link?.src && <Button />}
	</div>
);

const ImageSection = ({ image }) => (
  <div
		className={styles.module__image}
		data-anim="cover-image"
		>
			<Image
				src={image.src}
				alt={image.alt}
				width={image.width}
				height={image.height}
				data-sb-field-path="image"
				/>
  </div>
);

export const ImageContent = ({
	id,
	heading,
	subHeading,
	animationID,
	theme,
	brands,
	image,
	content,
	fullHeight,
	isolation,
	isContentFirst
}) => {
	const order = isContentFirst ? "content-first" : "image-first";
  return (
		<Section
			animationID={animationID}
			subHeading={subHeading}
			heading={heading}
			fullHeight={fullHeight}
			isolation={isolation}
			theme={theme}
			classNames={{
				inner: brands ? styles.with__brands : null,
			}}
    >
			<div
				className={styles.module}
				data-order={order}
				data-sb-object-id={id}
				>
			{isContentFirst ? (
					<>
						<ContentSection content={content} />
						{image && image.src && <ImageSection image={image} />}
					</>
				) : (
					<>
						{image && image.src && <ImageSection image={image} />}
						<ContentSection content={content} />
					</>
				)}
			</div>
			{brands && <BrandsConnector data={brands.brand} autoplay={brands?.autoplay} />}
		</Section>
  );
};
