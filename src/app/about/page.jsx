'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/documentation/20241010_162529.jpg'
import aboutImg2 from '../../../public/images/documentation/DSCF4834.JPG'
import aboutImg3 from '../../../public/images/documentation/20240812_100900.jpg'
import aboutImg4 from '../../../public/images/documentation/Team.png'
import funfaceData from "../../../data/funface";

export default function AboutPage() {
    return (
        <>
            <PageHeading
                title="About Us"
                bgSrc="/images/about_hero_bg.jpeg"
                pageLinkText="About Us"
            />

            <Spacing lg="150" md="80"/>
            <Div className="container">
                <Div className="row">
                    <Div className="col-xl-5 col-lg-7">
                        <SectionHeading
                            title="Your trusted astronout <br />for your games"
                            subtitle="About Ariverse Studio"
                        >
                            <Spacing lg="30" md="20"/>
                            <p className="cs-m0">
                                We are Ariverse Studio, Indie Games Studio from Malang. We turn ordinary into
                                extraordinary, through immersive storytelling, engaging gameplay, and unique experiences
                            </p>
                            <Spacing lg="30" md="30"/>
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40"/>
                        </SectionHeading>
                    </Div>
                    <Div className="col-lg-5 offset-xl-2">
                        <Image
                            src={aboutImg}
                            alt="About"
                            className="w-100 h-75 object-fit-cover cs-radius_15"
                        />
                        <Spacing lg="25" md="25"/>
                    </Div>
                    <Div className="col-lg-7">
                        <Image
                            src={aboutImg2}
                            alt="About"
                            className="w-100 cs-radius_15"
                        />
                        <Spacing lg="25" md="25"/>
                    </Div>
                    <Div className="col-lg-5">
                        <Image
                            src={aboutImg3}
                            alt="About"
                            className="w-50 cs-radius_15 object-fit-cover"
                        />
                        <Spacing lg="25" md="25"/>
                    </Div>
                </Div>
            </Div>

            <Div className="container">
                <FunFact
                    title="Our fun fact"
                    subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
                    data={funfaceData}
                />
            </Div>
            <Spacing lg="100" md="80"/>
            <Div className="container">
                <Div className="row">
                    <Div className="col-xl-5 col-lg-6">
                        <Div className="cs-image_layer cs-style1">
                            <Div className="cs-image_layer_in">
                                <Image
                                    src={aboutImg4}
                                    alt="About"
                                    className="w-100 cs-radius_15"
                                />
                            </Div>
                        </Div>
                        <Spacing lg="0" md="40"/>
                    </Div>
                    <Div className="col-xl-5 offset-xl-1 col-lg-6">
                        <SectionHeading
                            title="Why Choose Ariverse Studio?"
                            subtitle="Turning the Ordinary into Extraordinary"
                        >
                            <Spacing lg="30" md="20"/>
                            <p className="cs-m0">
                                At Ariverse Studio, we are driven by our passion and vision for storytelling and
                                creating immersive experiences. We create a product that not only entertaining, but
                                there is an impact for our player. We believe that games can be
                                a <b><i>powerful</i></b> medium
                                for any message, and we are here to help you to deliver that message.
                            </p>
                            <Spacing lg="15" md="15"/>
                            <p className="cs-m0">
                                At here, we believe that each of us is astronaut, and we are here to explore the
                                universe of creativity and imagination. We are here to turn the ordinary into
                                extraordinary, and we are here to make a difference.
                            </p>
                            <Spacing lg="30" md="30"/>
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="0"/>
                        </SectionHeading>
                    </Div>
                </Div>
            </Div>
            {/* End Why Choose Section */}

            {/* Start Team Section */}
            <Spacing lg="145" md="80"/>
            <Div className="container">
                <SectionHeading
                    title="Astronauts <br /> Behind the Scene"
                    subtitle="Our Team"
                    variant="cs-style1"
                />
                <Spacing lg="85" md="45"/>
                <TeamSlider/>
            </Div>
            {/* End Team Section */}

            {/* Start CTA Section */}
            <Spacing lg="150" md="80"/>
            <Div className="container">
                <Cta
                    title="Let’s disscuse make <br />something <i>cool</i> together"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                />
            </Div>
            {/* End CTA Section */}
        </>
    );
}
