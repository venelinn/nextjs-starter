import PropTypes from "prop-types";
import { Brands } from "@/components/Brands";
import { RCL as useTranslation } from "@/components/RCL";

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
