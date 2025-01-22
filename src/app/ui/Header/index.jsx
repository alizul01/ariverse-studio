'use client';
import {useEffect, useState} from 'react';
import Div from '../Div';
import Link from 'next/link';
import DropDown from './DropDown';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';

export default function Header({variant}) {
    const [isSticky, setIsSticky] = useState(false);
    const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
    const [mobileToggle, setMobileToggle] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        });
    }, []);

    return (
        <>
            <header
                className={`cs-site_header cs-style1 text-uppercase ${
                    variant ? variant : ''
                } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
            >
                <Div className="cs-main_header">
                    <Div className="container">
                        <Div className="cs-main_header_in">
                            <Div className="cs-main_header_left">
                                <Link className="cs-bold" href="/">
                                    Ariverse
                                </Link>
                            </Div>
                            <Div className="cs-main_header_center">
                                <Div className="cs-nav cs-primary_font cs-medium">
                                    <ul
                                        className="cs-nav_list"
                                        style={{display: `${mobileToggle ? 'block' : 'none'}`}}
                                    >
                                        <li>
                                            <Link href="/" onClick={() => setMobileToggle(false)}>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/about"
                                                onClick={() => setMobileToggle(false)}
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/service"
                                                onClick={() => setMobileToggle(false)}
                                            >
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/portfolio"
                                                onClick={() => setMobileToggle(false)}
                                            >
                                                Portfolio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog" onClick={() => setMobileToggle(false)}>
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                    <span
                                        className={
                                            mobileToggle
                                                ? 'cs-munu_toggle cs-toggle_active'
                                                : 'cs-munu_toggle'
                                        }
                                        onClick={() => setMobileToggle(!mobileToggle)}
                                    >
                    <span></span>
                  </span>
                                </Div>
                            </Div>
                            <Div className="cs-main_header_right">
                                <Div className="cs-toolbox">
                  <span
                      className="cs-icon_btn"
                      onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span/>
                      <span/>
                      <span/>
                      <span/>
                    </span>
                  </span>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </header>

            <Div
                className={
                    sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
                }
            >
                <button
                    className="cs-close"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                />
                <Div
                    className="cs-side_header_overlay"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                />
                <Div className="cs-side_header_in">
                    <Div className="cs-side_header_shape"/>
                    <Link className="cs-site_branding" href="/">
                        <img src="/images/footer_logo.svg" alt="Logo"/>
                    </Link>
                    <Div className="cs-side_header_box">
                        <h2 className="cs-side_header_heading">
                            Do you have a project in your <br/> mind? Keep connect us.
                        </h2>
                    </Div>
                    <Div className="cs-side_header_box">
                        <ContactInfoWidget title="Contact Us" withIcon/>
                    </Div>
                    <Div className="cs-side_header_box">
                        <Newsletter
                            title="Subscribe"
                            subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                            placeholder="example@gmail.com"
                        />
                    </Div>
                    <Div className="cs-side_header_box">
                        <SocialWidget/>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
