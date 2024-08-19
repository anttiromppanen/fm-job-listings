/* eslint-disable camelcase */
import Header from "@/components/Header";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Listings",
  description: "Job listings with filtering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={leagueSpartan.className}>
          <Header />
          <div className="w-full max-w-6xl mx-auto">{children}</div>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
