import PropTypes from "prop-types";
import { Grid } from "./Grid";
import { RCL as useTranslation } from "../RCL";

const GridConnector = (props) => {
	return (
		<Grid
			heading={props?.heading}
			subHeading={props?.subHeading}
			body={props?.body}
			content={props?.content}
			items={props?.items}
			link={props?.link}
			itemsPerRow={props?.itemsPerRow}
			theme={props?.theme}
			variant={props?.variant}
			labels={{
				learnMore: useTranslation({ searchKey: "svg-learn-more"})
 			}}
		/>
	);
};

// TODO: props

export default GridConnector;
export { GridConnector };
