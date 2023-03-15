import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import PlansData from "./PlansData";

const PricingCard = () => {
	const plans = [
		{
			free: false,
			plan: "Mini",
			day: `From ₹7/day`,
			account: "1 account on mobile only",
			adFree: "Ad-free music listening on mobile",
			group: "Group Session",
			download: "Download 30 songs on 1 mobile device",
		},
		{
			free: true,
			plan: "Individual",
			day: `₹119/month after offer period`,
			account: "1 account",
			adFree: "Ad-free music listening",
			group: "Group Session",
			download: "Download 10k songs/device on 5 devices",
		},
		{
			free: true,
			plan: "Duo",
			day: `₹149/month after offer period`,
			family: "For couples who live together",
			account: "2 accounts",
			adFree: "Ad-free music listening",
			group: "Group Session",
			download: "Download 10k songs/device, on 5 devices per account",
		},
		{
			free: true,
			plan: "Family",
			day: `₹179/month after offer period`,
			family: "For family who live together",
			account: "Up to 6 accounts",
			adFree: "Ad-free music listening on mobile",
			group: "Group Session",
			download: "Download 30 songs on 1 mobile device",
		},
	];
	return (
		<>
			<Flex direction="column" px="5%">
				{plans.map((ele) => {
					return <PlansData ele={ele} />;
				})}
			</Flex>
		</>
	);
};

export default PricingCard;
