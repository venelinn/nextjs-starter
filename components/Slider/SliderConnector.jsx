import PropTypes from "prop-types";
import { Slider } from "@/components/Slider";

const SliderConnector = (props) => {
	// console.log(props)
	return (
		<Slider
			items={props?.slide}
			variant={props?.variant}
			itemsPerView={props?.itemsPerView}
			heading={props?.heading}
			subHeading={props?.subHeading}
			type={props?.type}
			link={props?.link}
			theme={props?.theme}
			locale={props?.locale}
		/>
	);
};

// TODO: props

export default SliderConnector;
export { SliderConnector };
