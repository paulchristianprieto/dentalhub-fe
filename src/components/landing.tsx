"use client";

import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Landing({ user }: { user: User | null }) {
  const router = useRouter();

  return (
    <main className="flex bg-white flex-row items-center p-24">
      <Image alt="bg" src="/dentist.svg" width={400} height={200} />
      <div className="">
        <h1 className="text-black text-[60px] font-bold">All Out Smiles</h1>
        <h1 className="text-gray-600 text-[44px] mb-4">Dental Center</h1>

        <p className="text-black text-lg mb-4">
          32, My Street, Kingston, New York 12401
        </p>
      </div>
      <div className="text-end flex flex-col flex-1 items-end ">
        <h1 className="text-black text-[32px]">Our Services</h1>
        <ul className="text-black">
          <li>Cosmetic Dentistry</li>
          <li>Teeth Whitening</li>
          <li>Dental Implant</li>
          <li>General Dentistry</li>
          <li>Orthodontics</li>
          <li>Oral Surgery</li>
        </ul>

        <button
          className="w-[200px] mt-4 hover:bg-slate-700"
          onClick={() =>
            user ? router.push("/booking") : router.push("/login")
          }
        >
          Book Now
        </button>
      </div>
    </main>
  );
}
