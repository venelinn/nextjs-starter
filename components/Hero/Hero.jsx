import PropTypes from "prop-types";
import ContentfulImage from "../ContentfulImage/ContentfulImage";
import Markdown from "markdown-to-jsx";
import cx from "classnames";
import Section from "../Section";
import Button from "../Button/Button";
import styles from "./Hero.module.scss";

const Hero = (props) => {
	const processedMarkdown = `# ${props.heading}`;
  return (
    <Section
      image={props.image?.[0]}
      animationID={props?.animationID}
      data-sb-object-id={props.id}
      theme={props?.theme?.color}
      classNames={{
        main: styles.main,
        inner: styles.inner,
        heading: styles.heading,
      }}
    >
			{props.media && (
				<ContentfulImage
					image={props.media}
					className={styles.item__logo__img}
					/>
			)}
			{(props?.heading || props?.link?.url) && (
				<div className={styles.hero__container} data-sb-field-path="body">
					{props?.heading && (
						<Markdown
							className={cx(styles.hero__title, {
								[styles[`hero__title--${props.headingAlignment}`]]: props.headingAlignment,
							})}
							data-sb-field-path="heading"
							data-anim="hero-heading">
							{processedMarkdown}
						</Markdown>
					)}
					{props?.description && (
						<Markdown
							className={styles.hero__desc}
							data-sb-field-path="description"
							data-anim="hero-description">
							{props.description}
						</Markdown>
					)}
					{props?.link && props?.link?.url && (
						<Button
							href={props?.link.url}
							label={props?.link?.label}
							variant={props?.link?.theme}
							animationID="hero-heading"
							wrapperClassName={styles.grid__button__wrapper}
						/>
					)}
				</div>

			)}

    </Section>
  );
};

export default Hero;
export { Hero };

Hero.propTypes = {
  image: PropTypes.array.isRequired,
  title: PropTypes.string,
  logo: PropTypes.bool,
  animationID: PropTypes.string,
};

Hero.defaultProps = {
  animationID: "undefined",
  title: undefined,
  logo: false,
};
