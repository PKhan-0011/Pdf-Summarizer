import { CardDescription } from "@/components/ui/card";
import React from "react";

// Yha p ek map banega okkh!.. like card k liye okkh!..

const items = [
  {
    id: 1,
    name: "Basic",
    Description: "For learning and student uses",
    items: [
      "5 PDF per month only",
      "Access to basic AI reading tools",
      "Limited text extraction support",
      "Community help and FAQs only",
      "No advanced analytics or history saving",
    ],
    paymentLink: "",
    priceId: "",
  },
  {
    id: 2,
    name: "PRO",
    Description: "For Professional use.",
    items: [
      "Unlimited PDF uploads",
      "Advanced AI reading & summarization tools",
      "Full text + table extraction support",
      "Priority email & chat support",
      "Detailed analytics and history tracking",
      "Custom AI model tuning (beta)",
    ],
    paymentLink: "",
    priceId: "",
  },
];

const PricingSection = () => {
  return (
    <section>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 flex flex-col space-y-24">
        <div>
          <h2>Pricing</h2>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Yha p cards likhne hai sare okkh!.. like from shadcn ui s or map ka logic bhi yahi hoga okkh!,..*/}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
