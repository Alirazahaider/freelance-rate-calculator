import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelance Rate Calculator | Ali Raza",
  description: "Calculate your ideal freelance hourly, daily, or weekly rates based on income goals, expenses, and workload. Built with Next.js & TailwindCSS. Free web tool for freelancers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
