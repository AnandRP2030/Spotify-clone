import React from "react";
import { Box, Text } from "@chakra-ui/react";

const FooterDetails = ({ ele }) => {
	return (
		<Box>
			{Object.keys(ele).map((key) => {
				return <Text>{ele[key]}</Text>;
			})}
		</Box>
	);
};

export default FooterDetails;
