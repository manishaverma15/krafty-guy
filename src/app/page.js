import React from "react";
import HeroSection from "@/components/hero/hero";
import WhyUs from "@/components/whyUs/whyUs";
import Reviews from "@/components/reviews/reviews";
import FAQ from "@/components/faq/faq";
import Category from "@/components/work-category/work-category";

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
