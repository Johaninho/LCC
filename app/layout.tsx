import type { Metadata } from "next";
import { geistSans, geistMono } from '@/app/ui/font'
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: "Let's Catch Carbon",
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
        {children}
      </body>
    </html>
  );
}
