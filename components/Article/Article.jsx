import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
import Section from "../Section";
import Share from "../Share/Share";
import Chevron from "../Icons/Chevron";
import { Heading } from "../Headings/Heading";
import FormattedDate from "../../utils/DateFormat"; // Import the FormattedDate component
import styles from "./Article.module.scss";

const Article = ({content, date, heading, id, locale}) => {
	const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

	const renderLink = (props) => {
		const { href, children } = props;

		// Check if the link is external
		const isExternal = /^(https?:|mailto:|tel:)/.test(href);

		// If external, open in a new window
		if (isExternal) {
			return (
				<a href={href} target="_blank" rel="noopener noreferrer">
					{children}
				</a>
			);
		}

		// Otherwise, render as a regular link
		return <a {...props}>{children}</a>;
	};


	const renderBackButton = () => {
    const buttonText = locale === "fr" ? "Salle des médias" : "Media room";

    return (
      <div>
        <button onClick={handleGoBack} className={styles.backTo}>
          <Chevron />{buttonText}
        </button>
      </div>
    );
  };
	return (
		<Section>
			<div className={styles.article__header}>
				<FormattedDate dateStr={date} locale="en-US" />
				{heading?.heading && (
					<Heading
						as={heading?.as}
						size={heading?.size}
						uppercase={heading?.uppercase}
						data-sb-field-path="heading"
						className={styles.article__heading}
						>
						{heading?.heading}
					</Heading>
				)}
				{renderBackButton()}
			</div>
			<div className={styles.article__container}>
				<Share
					url={currentUrl}
					title={heading?.heading}
					facebook
					twitter
					pinterest
				/>
				<Markdown
					className={styles.article__content}
					data-sb-field-path="body"
					options={{
						overrides: {
							a: {
								component: renderLink,
							},
						},
					}}
					>
					{content}
				</Markdown>
				<Share
					url={currentUrl}
					title={heading?.heading}
					facebook
					twitter
					pinterest
				/>
			</div>
			{renderBackButton()}
		</Section>
	);
};

// TODO: props

export default Article;
export { Article };
