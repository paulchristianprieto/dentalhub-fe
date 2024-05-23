"use client";

import Appointment from "./appointment";
import { type User } from "@supabase/supabase-js";

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
  return (
    <>
      <h1 className="font-bold text-2xl">Upcoming Appointments</h1>
      {appointments?.map((appointment) => {
        return (
          <div key={appointment.id} className="pb-4">
            <Appointment user={user} appointment={appointment} />
          </div>
        );
      })}
    </>
  );
}
