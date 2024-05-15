import PropTypes from "prop-types";
import Image from "next/image";
import { renderRichTextContent } from "../../../utils/RichText";
import { Heading } from "../../Headings";
import ArrowDown from "../../Icons/ArrowDown";
import styles from "./Epic.module.scss";

const Epic = ({data, tabIndex}) => {
	const { image, heading, body } = data;
	return (
		<div className={styles.item} tabIndex={tabIndex + 1}>
			<Image
				src={image?.image[0]?.src}
				alt={image?.alt}
				width={image?.image[0]?.width}
				height={image?.image[0]?.height}
				className={styles.item__image}
				/>
				<div className={styles.item__content}>
					<div className={styles.item__icon}><ArrowDown /></div>
					{heading?.heading && (
						<Heading
							as={heading?.as}
							size={heading?.size}
							uppercase={heading?.uppercase}
							className={styles.item__heading}
							data-sb-field-path="heading"
						>{heading.heading}</Heading>
					)}
					{body && renderRichTextContent(body)}
				</div>
		</div>
  );
};

// Grid.propTypes = {
// 	heading: PropTypes.object,
// 	items: PropTypes.arrayOf(PropTypes.object),
// 	itemsPerRow: PropTypes.number,
// 	content: PropTypes.string,
// 	link: PropTypes.shape({
// 		href: PropTypes.string,
// 		title: PropTypes.string,
// 		buttonVariant: PropTypes.string,
// 	}),
// 	animationID: PropTypes.string,
// };

// Grid.defaultProps = {
// 	itemsPerRow: 4,
// 	animationID: "gallery-grid",
// 	items: [],
// 	content: undefined,
// };


export default Epic;
export { Epic }
