"use client";

import { AppointmentI } from "./appointments";
import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { deleteAppointment } from "./actions";

export interface DentistI {
  name?: string;
  schedule?: any;
}

export default function Appointment({
  appointment,
  user,
}: {
  appointment: AppointmentI;
  user: User | null;
}) {
  const router = useRouter();

  return (
    <>
      <p>Doctor: {appointment?.dentists?.name}</p>
      <p>Agenda: {appointment?.agenda}</p>
      <p>Date: {appointment?.date}</p>
      <p>Time: {`${appointment.startTime} - ${appointment.endTime}`}</p>
      <div className="mt-2">
        <button
          className="mr-2"
          onClick={() => router.push(`/booking/${appointment.id}`)}
        >
          View
        </button>
        <button
          className="button secondary"
          onClick={() => deleteAppointment(appointment.id)}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
