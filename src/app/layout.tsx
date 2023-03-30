import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import { Metadata } from 'next/types';
import { ReactNode } from 'react';
import Providers from './Providers';
import './globals.css';

export const metadata: Metadata = {
    title: 'IMDb Clone',
    description: 'This i s the IMDb Clone website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    <Navbar />
                    <SearchBox />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
