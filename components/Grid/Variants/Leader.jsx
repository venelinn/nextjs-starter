import PropTypes from "prop-types";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import { renderRichTextContent } from "@/utils/RichText";
import { Modal } from "@/components/Modal/Modal";
import { Heading } from "@/components/Headings/Heading";
import styles from "./Leader.module.scss";

const Leader = ({data, tabIndex, labels}) => {
	const { image, heading, subheading, body } = data;
	const [modalStates, setModalStates] = useState(false);

	const handleOpenModal = () => {
    setModalStates(true);
  };

  const handleCloseModal = () => {
    setModalStates(false);
  };

	return (
		<>
			<div
				className={cx(styles.leadership__item, styles.leader)}
				tabIndex={tabIndex + 1}
				 >
				<figure className={styles.leader__figure}>
					<Image
						src={image?.image[0]?.src}
						alt={image?.alt}
						width={image?.image[0]?.width}
						height={image?.image[0]?.height}
						className={styles.leader__image}
					/>
					<figcaption>{labels?.learnMore}</figcaption>
				</figure>
				<div className={styles.leader__content}>
					<Heading
						size="h4"
						as="h3"
						uppercase
						data-sb-field-path="heading"
						className={styles.leader__name}
						>
						{heading.heading}
					</Heading>

					<Heading
						size="base"
						as="div"
						uppercase
						data-sb-field-path="heading"
						className={styles.leader__position}
					>{subheading.heading}
					</Heading>
				</div>
				<a
					onClick={() => handleOpenModal(true)}
					className={styles.leader__button}
				><span className="sr-only">{labels?.learnMore}</span></a>
			</div>
			<Modal isOpen={modalStates} onClose={() => handleCloseModal()}>
				<div className={styles.mleader}>
					<Heading
						size="h2"
						as="div"
						uppercase
						data-sb-field-path="heading"
						className={styles.mleader__name}
					>
						{heading.heading}
					</Heading>
					<div className={styles.mleader__text}>
						{body && renderRichTextContent(body)}
					</div>
				</div>
			</Modal>
		</>
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


export default Leader;
export { Leader }
