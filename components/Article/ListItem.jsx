import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { Heading } from "@/components/Headings/Heading";
import FormattedDate from "@/utils/DateFormat"; //
import styles from "./ListItem.module.scss";

export default function ListItem({ locale, media }) {
	const { subjectTitle, slug, body, postDate } = media.fields;
	const maxLength = 300;
	const truncatedContent = body.length > maxLength ? body.substring(0, maxLength) + "..." : body;
	const readMoreTranslations = {
		"en": "[read more]",
		"fr": "[lire la suite]",
	};

	const currentLocale = locale; // Replace with your actual locale detection logic
	const translatedReadMore = readMoreTranslations[currentLocale] || readMoreTranslations["en"];
	const contentWithLink = `${truncatedContent} ${translatedReadMore}(${currentLocale?.includes("fr") ? "/fr" : ""}/media/${slug})`;

	return (
		<div className={styles.list}>
			<div className={styles.list__header}>
				<span className={styles.list__date}><FormattedDate dateStr={postDate} locale={locale} /></span>
				{subjectTitle && (
					<Heading as="h2" size="h4" uppercase={false} className={styles.list__heading}>
						<Link href={`/media/${slug}`} className="link link--active"><span className="link__text">{subjectTitle}</span></Link>
					</Heading>
				)}
			</div>
			<div className={styles.list__container}>
				<Markdown className={styles.list__content}>{contentWithLink}</Markdown>
				{/* <Link href={`/media/${slug}`}>read more</Link> */}
			</div>
		</div>
	);
}
