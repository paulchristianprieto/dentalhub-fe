"use server";

import axios from "axios";
import moment from "moment";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface CreateAppointmentSchema {
  userId: string;
  contactNumber: string;
  date: string;
  startTime: string;
  endTime: string;
  agenda: string;
  dentistId: string;
}

export async function deleteAppointment(id: string) {
  const { status } = await axios.delete(
    `${process.env.NEXT_PUBLIC_DENTALHUB_API}/appointments/${id}`
  );

  if (status !== 200) {
    redirect("/error");
  }

  redirect("/appointments");
}
