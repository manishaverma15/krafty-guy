import React from "react";
import HeroSection from "@/components/hero/hero";
import WhyUs from "@/components/whyUs/whyUs";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <Reviews />
    </>
  );
}
