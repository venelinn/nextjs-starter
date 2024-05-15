import PropTypes from "prop-types";
import { Article } from "./Article";

const ArticleConnector = ({id, body, date, title, locale}) => {
	return (
		<Article
			id={id}
			content={body}
			date={date}
			heading={title}
			locale={locale}
		/>
	);
};

// TODO: props

export default ArticleConnector;
export { ArticleConnector };
