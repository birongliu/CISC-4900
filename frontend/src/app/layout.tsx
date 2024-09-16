import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/navigation/Header";
import { ThemeContext } from "./ui/navigation/ThemeProvider";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import Footer from "./ui/navigation/Footer";
import AnnouncementBanner from "./ui/shared/AnnouncementBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetPals",
  description: "Discover the joy of pet adoption alongside a supportive community of animal lovers. PetPals is a space where you can not only find your perfect pet match but also share experiences, advice, and love with other pet owners. Let's make adoption the start of a new journey together."
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
          <ClerkLoaded> 
          {process.env.NEXT_PUBLIC_BETA === "true" && <AnnouncementBanner text="We are currently in beta. Please report any bugs "  />}
          <Header />
          {children}
          <Footer />
          </ClerkLoaded>
        </ThemeContext>
      </body>
      </html>
      </ClerkProvider>

  );
}
