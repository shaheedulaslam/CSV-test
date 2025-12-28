import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// Configure Poppins font with multiple weights
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'B2B SaaS Dashboard | CSV Import',
  description: 'Professional CSV import interface for B2B SaaS applications',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-sans bg-linear-to-br from-gray-50 to-gray-100 min-h-screen">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div>
        
        {/* Main content */}
        <main className="relative">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="mt-16 py-6 text-center">
          <p className="text-sm text-gray-500">
            B2B SaaS UI Foundations • Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </body>
    </html>
  );
}