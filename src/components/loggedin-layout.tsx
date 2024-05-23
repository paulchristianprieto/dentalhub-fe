"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dental Hub",
  description: "Dental Hub Web App",
};

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-row p-4 justify-between bg-slate-300">
          <div className="flex flex-row">
            <Image alt="logo" src="/dentist.svg" width={50} height={50} />
            <h1 className="text-black text-[40px] font-bold ml-2">
              All Out Smiles
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
            <div
              className="hover:cursor-pointer"
              onClick={() => router.push("/account")}
            >
              Profile
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => router.push("/appointments")}
            >
              Appointments
            </div>
          </div>
        </div>
        <div className="bg-white">{children}</div>
      </body>
    </html>
  );
}
