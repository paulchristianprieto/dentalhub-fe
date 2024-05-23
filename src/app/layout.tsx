import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dental Hub",
  description: "Dental Hub Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-row p-4 bg-slate-300">
          <div className="flex flex-row">
            <Image alt="logo" src="/dentist.svg" width={50} height={50} />
            <h1 className="text-black text-[40px] font-bold ml-2">
              All Out Smiles
            </h1>
          </div>
        </div>
        <div className="bg-white">{children}</div>
      </body>
    </html>
  );
}
