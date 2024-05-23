"use client";

import React from "react";
import Appointment from "./appointment";
import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export interface DentistI {
  id?: string;
  name?: string;
  schedule?: any;
}
export interface AppointmentI {
  id: string;
  createdAt: string;
  userId?: string;
  contactNumber?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  agenda?: string;
  dentistId?: any;
  dentists?: DentistI;
}

export default function Appointments({
  appointments,
  user,
}: {
  appointments: AppointmentI[] | null;
  user: User | null;
}) {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center">
        <h1 className="font-bold text-2xl mr-4">Upcoming Appointments</h1>
        <button onClick={() => router.push("/booking")}>New Appointment</button>
      </div>
      <hr className="my-4" />
      {appointments?.map((appointment) => {
        return (
          <React.Fragment key={appointment.id}>
            <div className="">
              <Appointment user={user} appointment={appointment} />
            </div>
            <hr className="py-0 my-4" />
          </React.Fragment>
        );
      })}
    </div>
  );
}
