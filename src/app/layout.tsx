import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "GliaAurre | Engineering the Future of Clarity",
    template: "%s | GliaAurre",
  },
  description:
    "GliaAurre is an engineering-driven technology company working at the intersection of hardware, software, signal processing, and intelligent systems.",
  keywords: [
    "GliaAurre",
    "Ultrasound Technology",
    "Deep Tech",
    "Signal Processing",
    "Medical Hardware",
    "Acoustic Engineering",
  ],
  authors: [{ name: "GliaAurre" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gliaaurre.com",
    title: "GliaAurre | Engineering the Future of Clarity",
    description:
      "Crafting precision deep-tech instruments grounded in understanding, not over-engineering.",
    siteName: "GliaAurre",
  },
  twitter: {
    card: "summary_large_image",
    title: "GliaAurre | Engineering the Future of Clarity",
    description:
      "Crafting precision deep-tech instruments grounded in understanding, not over-engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-background text-foreground tech-grid-bg relative antialiased selection:bg-accent-cyan/20 selection:text-white">
        {/* Scroll Progress Bar at the top */}
        <ScrollProgressBar />

        {/* Subtle Ambient Vignette & Top Grid Mask */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-100/30 via-transparent to-black/60" />
        
        {/* Persistent Navigation Header */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-grow z-10 pt-20">
          {children}
        </main>

        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}