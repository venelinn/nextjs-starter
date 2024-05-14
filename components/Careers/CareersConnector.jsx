import PropTypes from "prop-types";
import { Careers } from "@/components/Careers";

const CareersConnector = (props) => {
	return (
		<Careers
			heading={props?.heading}
			content={props?.content}
			link={props?.link}
			backgroundText={props?.backgroundText}
			backgroundTextRepeat={props?.backgroundTextRepeat || 5}
			variant={props?.variant || "horizontal"}
		/>
	);
};

// TODO: props

export default CareersConnector;
export { CareersConnector };
