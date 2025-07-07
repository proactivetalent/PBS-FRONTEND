"use client";

import AboutCompany from "@/home-page/AboutCompany";
import Alerts from "@/home-page/Alerts";
import Services from "@/home-page/Services";
import Solutions from "@/home-page/Solutions";
import Hero from "../home-page/Hero";

export default function Home() {
  return (
    <>
      <div className="bg-brand-dark">
        <div className="lg:w-[100%] mx-auto overflow-hidden">
          <Hero />
          <Alerts />
          <Solutions />
           <Services />
          <AboutCompany />
        </div>
      </div>
    </>
  );
}