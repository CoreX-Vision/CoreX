import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CoreX Vision - Sri Lanka",
  description:
    "CoreX Vision - Sri Lanka | We are specialize in Custom, WordPress, and mobile app development to help businesses grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PRV571L3XB"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PRV571L3XB');
        `}
      </Script>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
