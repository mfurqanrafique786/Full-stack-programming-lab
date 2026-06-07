import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"; // The @ symbol points to your root
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Lab 08 App",
  description: "Next.js with TSX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}