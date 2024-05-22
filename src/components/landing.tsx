"use client";

import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Landing({ user }: { user: User | null }) {
  const router = useRouter();

  useEffect(() => {
    console.log("hello");
    console.log({ user });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Book an Appointment Now!
      <button
        onClick={() => (user ? router.push("/booking") : router.push("/login"))}
      >
        Book Now!
      </button>
    </main>
  );
}
