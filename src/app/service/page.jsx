'use client'
import Card from "../ui/Card";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import ServiceList from "../ui/ServiceList";

export default function ServicesPage() {
  return (
    <>
      <PageHeading
        title='Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80' />
      <Div id="service">
        <Div className="container">
          <SectionHeading
            title="Our core services"
            subtitle="Services"
            variant="cs-style1 text-center"
          />
          <Spacing lg="70" md="45" />
          <ServiceList variant="cs-style2" />
        </Div>
        <Spacing lg="120" md="50" />
      </Div>
      {/* <TestimonialSlider /> */}
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Cta
          title='Let’s disscuse make <br />something <i>cool</i> together'
          btnText='Apply For Meeting'
          btnLink='/contact'
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
