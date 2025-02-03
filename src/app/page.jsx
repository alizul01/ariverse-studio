'use client';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';
import FunFact2 from "@/app/ui/FunFact/FunFact2";
import ServiceList from "@/app/ui/ServiceList";
import funfaceData from "../../data/funface";


const heroSocialLinks = [
    {
        name: 'Instagram',
        links: 'https://www.instagram.com/ariversestudio/',
    },
    {
        name: 'Twitter',
        links: 'https://x.com/ariversestudio',
    },
    {
        name: 'Itch io',
        links: 'https://ariversestudio.itch.io/',
    }
];

const portfolioData = [
    {
        title: 'Colorful Art Work',
        subtitle: 'See Details',
        href: '/portfolio/portfolio-details',
        src: '/images/portfolio_1.jpeg',
    },
    {
        title: 'Colorful Art Work',
        subtitle: 'See Details',
        href: '/portfolio/portfolio-details',
        src: '/images/portfolio_2.jpeg',
    },
    {
        title: 'Colorful Art Work',
        subtitle: 'See Details',
        href: '/portfolio/portfolio-details',
        src: '/images/portfolio_0.jpg',
    },
    {
        title: 'Colorful Art Work',
        subtitle: 'See Details',
        href: '/portfolio/portfolio-details',
        src: '/images/portfolio_3.jpeg',
    },
];

export default function Home() {
    return (
        <>
            <Hero
                title="Ariverse <br/> Studio"
                subtitle="Our mission is to create interactive media and games that not only entertain but also leave a lasting impact on players."
                btnText="Get a Quote"
                btnLink="/contact"
                scrollDownId="#service"
                socialLinksHeading="Follow Us"
                heroSocialLinks={heroSocialLinks}
                bgImageUrl="/images/image/image_0.png"
                overlayOpacity={0.5}
            />

            <div className="container">
                <FunFact2
                    variant="cs-type1"
                    title="Our fun fact"
                    subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
                    data={funfaceData}
                />
            </div>

            <Spacing lg="150" md="80"/>

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

            {/*<Spacing lg="150" md="50"/>*/}
            {/*<Div>*/}
            {/*    <Div className="container">*/}
            {/*        <SectionHeading*/}
            {/*            title="Portfolio to explore"*/}
            {/*            subtitle="Latest Projects"*/}
            {/*            variant="cs-style1 text-center"*/}
            {/*        />*/}
            {/*        <Spacing lg="90" md="45"/>*/}
            {/*    </Div>*/}
            {/*    <PortfolioSlider data={portfolioData}/>*/}
            {/*</Div>*/}

            <Spacing lg="150" md="80"/>
            <Div className="cs-shape_wrap_2">
                <Div className="cs-shape_2">
                    <Div/>
                </Div>
                <Div className="container">
                    <Div className="row">
                        <Div className="col-xl-4">
                            <SectionHeading
                                title="We get multiple awards <br /> and activities"
                                subtitle="Our Awards and Activities"
                                variant="cs-style1"
                            />
                            <Spacing lg="90" md="45"/>
                        </Div>
                        <Div className="col-xl-7 offset-xl-1">
                            <TimelineSlider/>
                        </Div>
                    </Div>
                </Div>
            </Div>

            <Spacing lg="130" md="70"/>
            <Div className="container">
                <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
                    Our Games Trailer
                </h2>
                <Spacing lg="70" md="70"/>
                <VideoModal
                    videoSrc="https://www.youtube.com/watch?v=VOXmSFzgI_s"
                    bgUrl="/images/products/products_aatmm.jpg"
                />
            </Div>

            <Spacing lg="145" md="80"/>
            <Div className="container">
                <SectionHeading
                    title="Awesome team <br/>members"
                    subtitle="Our Team"
                    variant="cs-style1"
                />
                <Spacing lg="85" md="45"/>
                <TeamSlider/>
            </Div>
            {/*<Spacing lg="150" md="80"/>*/}

            {/*<TestimonialSlider/>*/}

            <Spacing lg="150" md="80"/>

            <Div className="container">
                <Cta
                    title="Ready to start your <br/> game development journey?"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                />
            </Div>
            {/* End CTA Section */}
        </>
    );
}
