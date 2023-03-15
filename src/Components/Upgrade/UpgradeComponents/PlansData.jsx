import React from "react";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const PlansData = ({ ele }) => {
	console.log(ele);
	return (
		<Flex
			bg="white"
			direction="column"
			px={{ base: "5%", xl: "1%" }}
			py="30px"
			boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
			mt="30px"
			rounded="10px"
			w={{ base: "400px", xl: "270px" }}
		>
			<Flex borderBottom="1px" direction="column" pb="15px">
				<Flex
					fontWeight="bold"
					gap={3}
					align="center"
					direction={{ xl: "column" }}
					align="flex-start"
				>
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
					<Text
						rounded="5px"
						color="#0D72EA"
						border="1px"
						borderColor="#0D72EA"
						px="6px"
						py="2px"
					>
						One-time plans available
					</Text>
				</Flex>
				<Text fontSize="24px" fontWeight="bold" mt="10px">
					{ele.plan}
				</Text>
				<Text fontSize="16px">{ele.day}</Text>
				<Text fontSize="16px">{ele.account}</Text>
			</Flex>
			<Flex direction="column" gap={3} my="20px">
				{ele.family !== undefined ? (
					<Flex>
						<CheckIcon boxSize={6} />
						<Text ml="10px">{ele.family}</Text>
					</Flex>
				) : null}
				<Flex>
					<CheckIcon boxSize={6} />
					<Text ml="10px">{ele.adFree}</Text>
				</Flex>
				<Flex>
					<CheckIcon boxSize={6} />
					<Text ml="10px">{ele.group}</Text>
				</Flex>
				<Flex>
					<CheckIcon boxSize={6} />
					<Text ml="10px">{ele.download}</Text>
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
				w="100%"
				m="auto"
				bg="black"
				color="white"
				py="10px"
				fontWeight="bold"
			>
				VIEW PLANS
			</Box>
			<Link fontSize="10px" mt="5px">
				Terms and conditions apply,
			</Link>
		</Flex>
	);
};

export default PlansData;
