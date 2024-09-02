import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/navigation/Header";
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat Finder Assister",
  description: "Assisting new cat users on adopting/purchase cats and their accessories by providing them with necessary information/fun facts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {<ThemeProvider>{children}</ThemeProvider>}
      </body>
    </html>
  );
}
