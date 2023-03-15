import React from "react";

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
			day: "₹119/month after offer period",
			account: "1 account",
			adFree: "Ad-free music listening",
			group: "Group Session",
			download: "Download 10k songs/device on 5 devices",
		},
		{
			free: true,
			plan: "Duo",
			day: "₹149/month after offer period",
			account: "2 accounts",
			adFree: "Ad-free music listening on mobile",
			group: "Group Session",
			download: "Download 30 songs on 1 mobile device",
		},
		{
			free: true,
			plan: "Mini",
			day: "From ₹7/day",
			account: "1 account on mobile only",
			adFree: "Ad-free music listening on mobile",
			group: "Group Session",
			download: "Download 30 songs on 1 mobile device",
		},
	];
	return <div></div>;
};

export default PricingCard;
