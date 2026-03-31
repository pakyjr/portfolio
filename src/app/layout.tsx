import type { Metadata } from "next";
import { serif, mono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasquale Junior Montò",
  description:
    "Software Engineer & Co-founder at Clinequal. Building tools across clinical data, IoT, and the web.",
  metadataBase: new URL("https://pakyjr.dev"),
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Pasquale Junior Montò",
    description:
      "Software Engineer & Co-founder at Clinequal. Building tools across clinical data, IoT, and the web.",
    type: "website",
    images: [{ url: "/icon.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
