// src/pages/TermsOfServicePage.tsx
import React from "react";
import { TermsOfServiceHero } from "../../features/termsofservice/TermsOfServiceHero";
import { TermsContent } from "../../features/termsofservice/TermsContent"; // <--- Import mới

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero Section */}
      <TermsOfServiceHero />

      {/* Content Section (Chứa các điều khoản) */}
      <TermsContent />
    </div>
  );
};
