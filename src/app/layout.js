'use client';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import {Poppins, Open_Sans} from 'next/font/google';
import data_seo from '../../data/seo';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--primary-font',
});
const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--secondary-font',
});

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta name="author" content={data_seo.author}/>
            <meta name="description" content={data_seo.description}/>
            <meta name="keywords" content={data_seo.keywords}/>
            <meta property="og:title" content={data_seo.header}/>
            <meta property="og:description" content={data_seo.description}/>
            <meta property="og:image" content={data_seo.og_image}/>
            <meta property="og:url" content={data_seo.site_url}/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={data_seo.header}/>
            <meta name="twitter:description" content={data_seo.description}/>
            <meta name="twitter:image" content={data_seo.og_image}/>
            <title>
                {data_seo.header}
            </title>
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <meta name="apple-mobile-web-app-title" content="Ariverse"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
