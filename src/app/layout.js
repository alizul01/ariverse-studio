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
