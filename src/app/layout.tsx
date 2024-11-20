import type { Metadata } from "next";
import { Anton, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/app/(ui)/header/Header";
import Footer from "@/app/(ui)/footer/Footer";

const anton = Anton({
    weight: "400",
    variable: '--ff-anton',
    subsets: ['latin']
});

const poppins = Poppins({
    weight: ["400", "500"],
    variable: '--ff-poppins',
    subsets: ['latin']
})

export const metadata: Metadata = {
  title: "DJ EPX",
  description: "Over a 13+ year career, DJ EPX regularly performs at iconic nightclubs in multiple cities, mid-major festivals, and has garnered support and performed with countless tier 1 dance acts including Tiësto, David Guetta, Martin Garrix, Alesso, Steve Aoki, Afrojack, and many more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
