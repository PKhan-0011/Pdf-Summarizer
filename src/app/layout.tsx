import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Headers from "@/common/Headers";
import Footer from "@/common/Footer";

const fontsans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "pdf Summarizer",
  description: "An app that summarize the pdf into a summary!..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontsans.variable} font-sans antialiased`}>
        <Headers />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// agar mughe kuch bhi change karna hoga like page's pe header and footer ko chor k to mai main m karunga wo as parent change ho jayega okkh!..
// agar mughe sabhi p change karna hai to mai body k andar changing karunga usse sara chnage ho jayega okkh!...s
