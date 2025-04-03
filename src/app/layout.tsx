import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Aventure",
  description: "We Make Concepts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="absolute top-0 right-0 md:top-14 md:right-0 w-full">
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
