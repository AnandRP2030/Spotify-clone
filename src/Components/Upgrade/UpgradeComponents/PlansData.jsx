import React from "react";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const PlansData = ({ ele }) => {
	console.log(ele);
	return (
		<Flex direction="column" px="5%">
			<Flex borderBottom="2px" direction="column">
				<Flex fontWeight="bold">
					{ele.free ? (
						<Text
							bg="#0D72EA"
							color="white"
							px="6px"
							py="3px"
							rounded="5px"
						>
							1 month free
						</Text>
					) : null}
					<Text rounded="5px">One-time plans available</Text>
				</Flex>
				<Text>{ele.plan}</Text>
				<Text>{ele.day}</Text>
				<Text>{ele.account}</Text>
			</Flex>
			<Flex direction="column">
				{ele.family !== undefined ? (
					<Flex>
						<CheckIcon boxSize={6} />
						<Text>{ele.family}</Text>
					</Flex>
				) : null}
				<Flex>
					<CheckIcon boxSize={6} />
					<Text>{ele.adFree}</Text>
				</Flex>
				<Flex>
					<CheckIcon boxSize={6} />
					<Text>{ele.group}</Text>
				</Flex>
				<Flex>
					<CheckIcon boxSize={6} />
					<Text>{ele.download}</Text>
				</Flex>
			</Flex>
			<Box
				as={motion.button}
				whileHover={{
					scale: 1.05,
					color: "white",
					backgroundColor: "black",
				}}
				rounded="50px"
				w="80%"
				m="auto"
				bg="black"
				color="white"
				py="10px"
				fontWeight="bold"
			>
				VIEW PLANS
			</Box>
			<Link>Terms and conditions apply,</Link>
		</Flex>
	);
};

export default PlansData;
