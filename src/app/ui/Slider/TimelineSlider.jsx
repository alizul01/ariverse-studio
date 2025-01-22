import {Icon} from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

const timelineData = [
    [
        {
            year: '2024',
            name: 'Compfest - Game Development',
            position: 'Best Narrative',
            type: 'Award',
        },
        {
            year: '2024',
            name: 'IGDX 2024',
            position: 'Business Pass',
            type: 'B2B Matchmaking and Conference',
        },
        {
            year: '2024',
            name: 'Gamecomm - INTI 2024',
            position: 'Attendee and Day 2 Speaker',
            type: 'Conference',
        },
    ],
    [
        {
            year: '2023',
            name: 'Gemastik - Game Development',
            position: '4th Place',
            type: 'Award',
        },
        {
            year: '2023',
            name: 'KMIPN - Game Development',
            position: '2nd Place Poster and Special Reward to IGDX 2023',
            type: 'Award',
        },
        {
            year: '2023',
            name: 'IGDX - Game Development',
            position: 'Attendee',
            type: 'Conference',
        },
    ]
];

export default function TimelineSlider() {
    /** Slider Settings **/
    const SlickArrowLeft = ({currentSlide, slideCount, ...props}) => (
        <div
            {...props}
            className={
                'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
        >
            <Icon icon="bi:arrow-left"/>
        </div>
    );
    const SlickArrowRight = ({currentSlide, slideCount, ...props}) => (
        <div
            {...props}
            className={
                'slick-next slick-arrow' +
                (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
        >
            <Icon icon="bi:arrow-right"/>
        </div>
    );
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft/>,
        nextArrow: <SlickArrowRight/>,
        arrows: false,
        responsive: [
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings} className="cs-arrow_style3">
            {timelineData.map((item, index) => (
                <Div key={index}>
                    <Timeline columnData={item}/>
                </Div>
            ))}
        </Slider>
    );
}
