import React from "react";
import Navbar from "./UpgradeComponents/Navbar";
import PremiumSection from "./UpgradeComponents/PremiumSection";
import PowerSection from "./UpgradeComponents/PowerSection";
import PricingCard from "./UpgradeComponents/PricingCard";

const Upgrade = () => {
  return (
    <div>
      <Navbar />
      <PremiumSection />
      <PowerSection />
      {/*<PricingCard />*/}
    </div>
  );
};

export { Upgrade };
