import React from "react";
import HeroSection from "@/components/hero/hero";
import WhyUs from "@/components/whyUs/whyUs";
import Reviews from "@/components/reviews/reviews";
import FAQ from "@/components/faq/faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <Reviews />
      <FAQ />
    </>
  );
}
