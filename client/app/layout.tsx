import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./DashboardWrapper";
// import StoreProvider from "@/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inventory Management Dashboard",
  description: "Full Stack Inventory Management Dashboard Application using Nextjs, Redux, Node, and AWS. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* <StoreProvider> */}
        <DashboardWrapper>
        {children}
        </DashboardWrapper>
      {/* </StoreProvider> */}
      </body>
    </html>
  );
}
