'use client'
import React from 'react';
import PageHeading from "@/app/ui/PageHeading";
import Spacing from "@/app/ui/Spacing";
import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import Link from "next/link";
import portfolioData from "../../data/portfolio";

export default function PrivacyPoliciesPage() {
  return (
    <>
      <PageHeading 
        title='Privacy Policies'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PRIVACY POLICIES'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Game Privacy Policies' 
          subtitle='Legal' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-8 offset-lg-2">
            <div className="cs-list_style_1">
              <ul>
                {portfolioData.map((item, index) => (
                  <li key={index}>
                    <Link href={`/portfolio/${item.id}/privacy-policy`}>
                      <h3>{item.title}</h3>
                      <p>Read Privacy Policy</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
    </>
  );
}
