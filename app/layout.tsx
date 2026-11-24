import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#090b10" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://anempty.com"),
  title: {
    default: "Neeli Mahi Teja | Full-Stack Engineer",
    template: "%s | Neeli Mahi Teja",
  },
  description:
    "Full-stack engineer in Hyderabad building performant web applications, scalable systems, and thoughtful digital experiences.",
  keywords: [
    "Neeli Mahi Teja",
    "Mahi Teja",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Hyderabad",
  ],
  authors: [{ name: "Neeli Mahi Teja", url: "https://anempty.com" }],
  creator: "Neeli Mahi Teja",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anempty.com",
    siteName: "Neeli Mahi Teja",
    title: "Neeli Mahi Teja | Full-Stack Engineer",
    description: "Building performant web applications and scalable systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neeli Mahi Teja | Full-Stack Engineer",
    description: "Building performant web applications and scalable systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
