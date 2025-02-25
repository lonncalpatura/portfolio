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
    <html
      lang="en"
      className="bg-primary text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-color font-normal leading-tight scroll-smooth overflow-x-hidden"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
