import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kelvin Omoluyi - Mobile & Web Developer",
  description: "I'm Kelvin Omoluyi, a Mobile and Web developer specialized in creating, Functional, Highly converting, Aesthetically pleasing and Secure Applications.",
  authors: [{ name: "Kelvin Omoluyi" }],
  keywords: ["kelvin omoluyi", "kelvin", "mobile developer", "web developer", "developers", "ios developer", "android developer", "react native", "web developers in nigeria", "developers in nigeria", "Workforce Management", "portfolio", "techies", "website"],
  creator: "Kelvin Omoluyi",
  publisher: "Kelvin Omoluyi",
  metadataBase: new URL("https://kelvinomoluyi.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kelvinomoluyi.vercel.app/",
    title: "Kelvin Omoluyi - Mobile & Web Developer",
    description: "I'm Kelvin Omoluyi, a Mobile and Web developer specialized in creating, Functional, Highly converting, Aesthetically pleasing and Secure Applications.",
    siteName: "Kelvin Omoluyi - Mobile & Web Developer",
    images: [
      {
        url: "https://kelvinomoluyi.vercel.app/favicon_io/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Kelvin Omoluyi - Mobile & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Omoluyi - Mobile & Web Developer",
    description: "Deriving solutions, Bridging the gap between design and functionality, delivered with precision.",
    images: ["https://jemashresources.com/uploads/jemash-banner.png"], 
    creator: "@KelvinOmoluyi", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
