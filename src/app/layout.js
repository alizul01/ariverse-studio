'use client';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import {Poppins, Open_Sans} from 'next/font/google';
import data from '../../data/seo';

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
            <meta name="author" content={data.author}/>
            <link rel="icon" href="/images/favicon.ico" sizes="any"/>
            <title>
                {data.header}
            </title>
        </head>
        <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
