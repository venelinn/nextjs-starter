import PropTypes from "prop-types";
import { Brands } from "./Brands";
import { RCL as useTranslation } from "../RCL";

const BrandsConnector = ({data, autoplay}) => {
	return (
		<Brands
			items={data}
			autoplay={autoplay || false}
			labels={{
				visit: useTranslation({ searchKey: "visit-brand"})
 			}}
		/>
	);
};

// TODO: props

export default BrandsConnector;
export { BrandsConnector };
