import React from "react";
import HeroSection from "@app/components/hero/hero";
import FAQ from "@app/components/faq/faq";
import WhyUs from "@app/components/why-us/why-us";
import Reviews from "@app/components/reviews/reviews";
import Category from "@app/components/work-category/work-category";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Category />
      <WhyUs />
      <Reviews />
      <FAQ />
    </>
  );
}
