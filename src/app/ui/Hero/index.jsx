import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Button from '../Button';
import VerticalLinks from '../VerticalLinks';

export default function Hero({
                                 title,
                                 subtitle,
                                 btnText,
                                 btnLink,
                                 scrollDownId,
                                 socialLinksHeading,
                                 heroSocialLinks,
                                 bgImageUrl,
                                 overlayOpacity = 0.5 // Default overlay opacity
                             }) {
    return (
        <Div
            className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1 relative"
            style={{
                backgroundImage: `url(${bgImageUrl})`,
            }}
        >
            <Div
                style={{
                    opacity: overlayOpacity,
                    inset: 0,
                    position: 'absolute',
                    backgroundColor: "#380409",
                    zIndex: 1,
                }}
            />

            <Div className="cs-shape_1 relative z-20"/>
            <Div className="cs-shape_1 relative z-20"/>
            <Div className="cs-shape_1 relative z-20"/>

            <Div className="container relative z-20">
                <Div className="cs-hero_text">
                    <h1 className="cs-hero_title">{parse(title)}</h1>
                    <Div className="cs-hero_info">
                        <Div>
                            <Button btnLink={btnLink} btnText={btnText}/>
                        </Div>
                        <Div>
                            <Div className="cs-hero_subtitle">{subtitle}</Div>
                        </Div>
                    </Div>
                </Div>
            </Div>

            <VerticalLinks
                data={heroSocialLinks}
                title={socialLinksHeading}
                className="relative z-20"
            />

            <a
                href={scrollDownId}
                className="cs-down_btn relative z-20"
            >
                .
            </a>
        </Div>
    );
}