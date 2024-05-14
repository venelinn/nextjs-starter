import PropTypes from "prop-types";
import { Contacts } from "@/components/Contacts";

const ContactsConnector = (props) => {
	return (
		<Contacts
			content={props?.content}
			inquiries={props?.inquiries}
			pageName={props?.pageName}
		/>
	);
};

// TODO: props

export default ContactsConnector;
export { ContactsConnector };
