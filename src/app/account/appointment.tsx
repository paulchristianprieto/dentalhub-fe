"use client";

import { useState } from "react";
import { AppointmentI } from "./appointments";
import { type User } from "@supabase/supabase-js";
import AppointmentForm from "../booking/appointment-form";
import { useRouter } from "next/navigation";

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
      <button onClick={() => router.push(`/booking/${appointment.id}`)}>
        View
      </button>
    </>
  );
}
