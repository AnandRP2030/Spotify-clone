import React from "react";
import FooterDetails from "./FooterDetails";
import FooterIcon from "./FooterIcon";
import { Flex, Image, Box } from "@chakra-ui/react";
const Footer = () => {
	const details = [
		{
			title: "COMPANY",
			key1: "About",
			key2: "Jobs",
			key3: "For the Record",
		},
		{
			title: "COMMUNITIES",
			key1: "For Artist",
			key2: "Developers",
			key3: "Advertising",
			key4: "Inverstors",
			key5: "Vendors",
		},
		{
			title: "USEFUL LINKS",
			key1: "Support",
			key2: "Web Player",
			key3: "Free Mobile App",
		},
	];

	return (
		<Box bg="black">
			<Flex
				color="white"
				justify="space-between"
				h="500px"
				maxW="1140px"
				m="auto"
				px={{ base: "5%", xl: "2%" }}
				py="70px"
			>
				<Box>
					<Image
						src={require("./logo.jpg")}
						w={{ base: "90px", lg: "130px" }}
					/>
				</Box>

				<Flex flex="3">
					{details.map((ele) => {
						return <FooterDetails ele={ele} />;
					})}
				</Flex>
				<FooterIcon />
			</Flex>
		</Box>
	);
};

export default Footer;
