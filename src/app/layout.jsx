import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export const fontBangla = localFont({
  src: "../fonts/mayaboti-normal.ttf",
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-eta.vercel.app"),

  title: {
    default: "Hero Kidz | Smart Toys & Learning Products for Kids",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz offers fun, safe, and educational toys for children. Discover smart learning products that boost creativity, skills, and imagination.",

  applicationName: "Hero Kidz",

  keywords: [
    "Hero Kidz",
    "kids toys",
    "educational toys",
    "learning toys for kids",
    "kids smart toys",
    "children products",
    "kids online store",
  ],

  authors: [{ name: "Hero Kidz Team" }],
  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://hero-kidz-eta.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hero-kidz-eta.vercel.app",
    siteName: "Hero Kidz",
    title: "Hero Kidz | Smart Toys & Learning Products for Kids",
    description:
      "Buy educational and fun toys for kids. Hero Kidz brings smart, safe, and creative learning products for children.",
    images: [
      {
        url: "https://i.ibb.co.com/HT7DhBc4/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz – Educational Toys for Kids",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Smart Toys & Learning Products for Kids",
    description:
      "Explore fun and educational toys for kids at Hero Kidz. Smart learning starts here.",
    images: ["https://i.ibb.co.com/HT7DhBc4/image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "https://i.ibb.co.com/BK6s6wTy/image.png",
  },

  category: "Kids & Toys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>
        <main className="py-2 w-11/12 mx-auto min-h-[calc(100svh-302px)]">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
