import PropTypes from "prop-types";
import Image from "next/image";
import cx from "classnames";
import { renderRichTextContent } from "../../utils/RichText";
import Section from "../Section";
import { Heading } from "../Headings";
import Info from "../Icons/Info";
import styles from "./Contacts.module.scss";

const Contacts = ({content, inquiries, pageName}) => {
	const pageHeading = {
		heading: pageName,
		as: "h1",
		size: "h1",
	}
	return (
		<>
		<Section
			heading={pageHeading}
			classNames={{
				main: styles.main,
			}}
			>
			</Section>
			{content?.map((items, index) => (
				<Section
					key={index}
					heading={items.heading}
					theme="grey"
					classNames={{
						main: styles.contact,
					}}
					>
					<div
						className={cx(styles.contact__section, styles["contact__section--contact"])}
						style={items?.Items ? { "--contact-items": `${items?.Items?.length}` } : null}
						>
						{items?.Items?.map((item, index) => (
							<div
								key={index}
								className={cx(styles.item, styles["item--contact"])}
								>
							{item?.logo?.logo && (
								<figure
									style={item.logo?.color ? { "--logo-bgr": `var(--color-${item.logo?.color})` } : null}
									className={styles.item__logo}
									>
									<Image
										src={item.logo?.logo.image[0].src}
										alt={item.logo?.logo.alt}
										width={item.logo.logo.image[0].width}
										height={item.logo.logo.image[0].height}
										data-invert={item.logo?.logo.invert}
										className={styles.item__logo__img}
										/>
								</figure>
							)}
								{item?.heading?.heading && (
									<Heading
										as={item.heading?.as}
										size={item.heading?.size}
										uppercase={item.heading?.uppercase}
										data-sb-field-path="heading"
									>{item?.heading.heading}</Heading>
								)}
								{item?.address && <div className={styles.item__adr}>{item.address}</div>}
								{item?.phone?.phone && (
									<div>
										{item.phone.label}: {item.phone.phone}
									</div>
								)}
								{item?.phone?.phoneExtra && (
									<div>
										{item.phone.phoneExtra}
									</div>
								)}
								{item?.webUrl?.url && (
									<div className={styles.item__web}>
										{item.webUrl?.label}:
										<a className="link link--active" href={item.webUrl?.url} target="_blank"><span className="link__text">{item.webUrl?.url.replace(/^\/\//, "")}</span></a>
									</div>
								)}
							</div>
						))}
					</div>
				</Section>
			))}
			{inquiries?.map((items, index) => (
				<Section
					key={index}
					heading={items.heading}
					classNames={{
						main: styles.contact,
					}}
					>
					<div className={cx(styles.contact__section, styles["contact__section--inq"])}>
						{items?.Items?.map((item, index) => (
							<div key={index}
							className={cx(styles.item, styles["item--inq"])}
							>
								{item?.heading?.heading && (
									<Heading
										as={item.heading?.as}
										size={item.heading?.size}
										uppercase={item.heading?.uppercase}
										data-sb-field-path="heading"
									>{item?.heading.heading}</Heading>
								)}
								{item?.body && (
									<div className={styles.contact__inq__content}>
										<Info />
										{renderRichTextContent(item.body)}
									</div>
								)}
							</div>
						))}
					</div>
				</Section>
			))}
		</>
	);
};

// TODO: props

export default Contacts;
export { Contacts };
