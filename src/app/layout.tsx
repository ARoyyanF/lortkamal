import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Roboto,
  Inter,
  Montserrat,
  Poppins,
  Quicksand,
  Lato,
  Raleway,
} from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/trpc/client";
import ObserverProvider from "./ObserverProvider";
import { Weight } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Mengakar Bertumbuh Bergerak",
  description: "Mengakar Bertumbuh Bergerak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${inter.variable} ${montserrat.variable} ${poppins.variable} ${quicksand.variable} ${lato.variable} ${raleway.variable}`}
      >
        <TRPCProvider>
          <ObserverProvider>{children}</ObserverProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
