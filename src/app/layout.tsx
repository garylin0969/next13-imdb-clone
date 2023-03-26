import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Providers from './Providers';
import './globals.css';

export const metadata = {
    title: 'IMDb Clone',
    description: 'This i s the IMDb Clone website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
