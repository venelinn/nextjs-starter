import React, {useState, useEffect} from "react"
import Section from "../Section";
import Markdown from "markdown-to-jsx";
import cx from "classnames";
import Button from "../Button";
import { Heading } from "@/components/Headings/Heading";
import styles from "./Careers.module.scss";

const Careers = ({heading, content, link, backgroundText, backgroundTextRepeat, variant}) => {
	const repeatCount = parseInt(backgroundTextRepeat, 10);
  const isValidRepeatCount = !isNaN(repeatCount) && repeatCount > 0;

  const repeatedElements = isValidRepeatCount
    ? Array.from({ length: repeatCount }, (_, index) => (
        <span key={index}>{backgroundText}</span>
      ))
    : null;

  return (
		<Section
		classNames={{
			main: styles.main,
		}}
		>
			<div
				className={cx(styles.careers, {
					[styles[variant]]: variant,
				})}
				>
				<div className={styles.careers__content}>
				{heading?.heading && (
					<Heading
						as={heading?.as}
						size={heading?.size}
						uppercase={heading?.uppercase}
						animationID="section-title"
						data-sb-field-path="heading"
						className={styles.careers__heading}
						>
						{heading?.heading}
					</Heading>
				)}
				{content && (
					<Markdown options={{ forceBlock: true }} className={styles.careers__body} data-sb-field-path="body">
						{content}
					</Markdown>
				)}
				</div>
				{link && link?.url && (
					<Button
						href={link.url}
						label={link?.label}
						variant={link?.theme}
						// animationID="gallery-grid-button"
						wrapperClassName={styles.careers__button__wrapper}
					/>
					)}
				</div>
				{backgroundText && isValidRepeatCount && (
					<div
						className={cx(styles.careers__bgr, {
							[styles[variant]]: variant,
						})}
						>{repeatedElements}</div>
				)}
      </Section>
  )
}

export default Careers
export { Careers };
