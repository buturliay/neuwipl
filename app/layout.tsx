import type { Metadata } from "next";
import Header from "@/components/Header";
import './globals.css';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Women in Pre-Law Society at Northeastern",
  description: "A website for the Women in Pre-Law Society at Northeastern",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
