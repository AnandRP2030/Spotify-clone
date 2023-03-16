import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Icon, Flex } from "@chakra-ui/react";
const FooterIcon = () => {
	return (
		<Flex>
			<Icon as={BsTwitter} />
			<Icon as={BsInstagram} />
			<Icon as={FaFacebookF} />
		</Flex>
	);
};

export default FooterIcon;
