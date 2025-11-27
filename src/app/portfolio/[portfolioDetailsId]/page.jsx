'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { useParams } from 'next/navigation';
import portfolioData from "../../../../data/portfolio";

export default function PortfolioDetailsPage() {
  const params = useParams();
  const portfolioId = params.portfolioDetailsId;
  const portfolioItem = portfolioData.find(item => item.id === portfolioId);

  // Handle case where portfolio item is not found
  if (!portfolioItem) {
    return (
      <>
        <PageHeading 
          title='Project Not Found'
          bgSrc='/images/service_hero_bg.jpeg'
          pageLinkText='PORTFOLIO-DETAILS'
        />
        <Spacing lg='150' md='80'/>
        <Div className="container text-center">
          <h2>Sorry, the project you are looking for does not exist.</h2>
          <Spacing lg='30' md='30'/>
          <Button btnLink='/portfolio' btnText='Back to Portfolio'/>
        </Div>
        <Spacing lg='150' md='80'/>
      </>
    );
  }

  // Find next and previous projects
  const currentIndex = portfolioData.findIndex(item => item.id === portfolioId);
  const prevItem = currentIndex > 0 ? portfolioData[currentIndex - 1] : null;
  const nextItem = currentIndex < portfolioData.length - 1 ? portfolioData[currentIndex + 1] : null;

  return (
    <>
      <PageHeading 
        title='Portfolio Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO-DETAILS'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src={portfolioItem.src} alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title={portfolioItem.title} 
              subtitle={portfolioItem.category} 
            >
              <Spacing lg='40' md='20'/>
              <p>{portfolioItem.description}</p>
              <Spacing lg='30' md='30'/>
              {portfolioItem.href && portfolioItem.href !== '#' && (
                 <Button btnLink={portfolioItem.href} btnText='Play Game' />
              )}
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>{portfolioItem.category}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>{portfolioItem.location}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>{portfolioItem.software}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>{portfolioItem.dated}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>{portfolioItem.client}</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          <Div className="cs-page_navigation cs-center">
            <Div>
              {prevItem && (
                <Button btnLink={`/portfolio/${prevItem.id}`} btnText='Prev Project' variant='cs-type1'/>
              )}
            </Div>
            <Div>
              {nextItem && (
                <Button btnLink={`/portfolio/${nextItem.id}`} btnText='Next Project'/>
              )}
            </Div>
          </Div>
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='agency@arino.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
