import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dataleap",
  description: "All statistics at your fingertips",
  icons: {
    icon: [
     {url:  'assets/favicon/favicon.ico', type: "image/x-icon"},
     { url: "assets/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
     { url: "assets/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
     { url: "assets/favicon/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
     { url: "assets/favicon/android-chrome-256x256.png", type: "image/png", sizes: "256x256" },
    ],
    apple: '/assets/favicon/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


