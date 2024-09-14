import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/navigation/Header";
import { ThemeContext } from "./ui/navigation/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./ui/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetPals",
  description: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeContext>
          <Header />
          {children}
          <Footer />
        </ThemeContext>
      </body>
      </html>
      </ClerkProvider>

  );
}
