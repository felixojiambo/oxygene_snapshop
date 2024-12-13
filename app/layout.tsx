import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '../components/layout/providers';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Product List - Industrium',
  description: 'E-commerce site using FakerShop API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#333] font-sans`}>
        <Providers>
          {/* Header */}
          <Header />

          {/* Main Content Area */}
          <main className="flex flex-col min-h-screen px-4">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
