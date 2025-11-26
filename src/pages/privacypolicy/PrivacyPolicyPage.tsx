import React from "react";
import { PrivacyPolicyHero } from "../../features/privacypolicy/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "../../features/privacypolicy/PrivacyPolicyContent";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </div>
  );
};
