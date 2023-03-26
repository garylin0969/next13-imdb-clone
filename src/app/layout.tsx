import './globals.css';

export const metadata = {
    title: 'IMDb Clobe',
    description: 'This i s the IMDb Clone website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
