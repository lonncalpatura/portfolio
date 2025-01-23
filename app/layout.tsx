import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lonn Calpatura",
  description: " Front-end website developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className= "bg-primary bg-gradient-to-tl from-primary to-secondary-700/30 lg:to-secondary-700/50 text-color">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
