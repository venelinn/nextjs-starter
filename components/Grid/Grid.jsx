import PropTypes from "prop-types";
import { useRef } from "react";
import cx from "classnames";
import Markdown from "markdown-to-jsx";
import Section from "@/components/Section";
import Button from "@/components/Button/Button";
import Epic from "@/components/Grid/Variants/Epic";
import Leader from "@/components/Grid/Variants/Leader";
import styles from "@/components/Grid/Grid.module.scss";

const Grid = ({ heading, subHeading, content, items, link, theme, variant, labels}) => {
	const element = useRef();
	return (
    <Section
			classNames={{
				main: styles.main,
			}}
			heading={heading}
			subHeading={subHeading}
			theme={theme?.color}
			animationID="gallery-grid"
		>
			<div data-anim="brands" ref={element}>
				{content && (
					<Markdown options={{ forceBlock: true }} className={styles.grid__content} data-sb-field-path="body">
						{content}
					</Markdown>
				)}
				{items && items.length > 0 && (
					<div
						className={cx(styles.grid__items, {
							[styles[`grid-${variant}`]]: variant,
						})}
						data-anim="gallery-grid-items"
						>
						{items.map((item, index) => {
							let gridContent;
							switch (variant) {
								case "leadership":
									gridContent = <Leader data={item} key={index} tabIndex={index} labels={labels} />;
									break;
								case "epic":
									gridContent = <Epic data={item} key={index} tabIndex={index} />;
									break;
								default:
									gridContent = <Epic data={item} key={index} tabIndex={index} />;
							}
							return (
								gridContent
						)})}
					</div>
				)}
				{link && link?.url && (
					<Button
						href={link.url}
						label={link?.label}
						variant={theme?.color === "dark" ? "secondary" : "primary"}
						animationID="gallery-grid-button"
						wrapperClassName={styles.grid__button__wrapper}
					/>
				)}
			</div>
    </Section>
  );
};

Grid.propTypes = {
	heading: PropTypes.object,
	subHeading: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.object),
	content: PropTypes.string,
	theme: PropTypes.shape({
		color: PropTypes.string,
	}),
	link: PropTypes.shape({
		href: PropTypes.string,
		title: PropTypes.string,
		buttonVariant: PropTypes.string,
	}),
	animationID: PropTypes.string,
	labels: PropTypes.shape({
		learnMore: PropTypes.string,
	}),
};

Grid.defaultProps = {
	animationID: "gallery-grid",
	headings: {},
	subHeading: "",
	theme: {},
	link: {},
	items: [],
	content: undefined,
	labels: {
		learnMore: "Learn more",
	},
};


export default Grid;
export { Grid }
