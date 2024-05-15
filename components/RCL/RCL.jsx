
import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import { useData } from "../../utils/DataProvider";

function RCL({ searchKey }) {
  const [state] = useData();

  const getMessage = (searchKey) => {
		if (state.messages) {
			const message = state.messages.find((item) => item.key === searchKey);
			if (message) {
				if (message.parseAsMarkdown) {
          return (
						<Markdown options={{ wrapper: React.Fragment }}>
							{message.value}
						</Markdown>);
        } else {
          return message.value;
        }
      }
    }
    return "";
  };

  return getMessage(searchKey);
}

RCL.propTypes = {
  searchKey: PropTypes.string.isRequired,
};

export default RCL;
export { RCL };
