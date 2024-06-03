import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/globals.css";
import Header from './Header'
import Footer from "./Footer";
import ScrollToTopButton from "@/components/scrolltop";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sino Foods",
  description: "Cooking Instructions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>

      <html lang="en">

        <body className={`${inter.className} min-h-screen flex flex-col bg-gray-100  overflow-x-hidden`}>


          <SignedIn >
            <div className="absolute top-12 right-8">
              <UserButton />
            </div>
            <Header />
          </SignedIn>

          {children}
          <Footer />
          <ScrollToTopButton />
        </body>

      </html>
    </ClerkProvider>

  );
}
