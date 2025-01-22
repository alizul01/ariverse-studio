import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '#',
  },
  {
    title: 'Privacy Policy',
    href: '#',
  },
];

const serviceMenu = [
  {
    title: 'Game Development Life Cycle',
    href: '/service/service-gdlc',
  },
  {
    title: 'Gamification Services',
    href: '/service/service-gamification',
  },
  {
    title: 'XR Development Services',
    href: '/service/service-xr',
  },
  {
    title: 'Game Based Learning Services',
    href: '/service/service-gbl',
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/footer_logo.svg"
                  logoAlt="Logo"
                  text="Welcome to Ariverse Studio. We're a indie game development studio based in Malang, Indonesia."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`} Ariverse.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
