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

export async function createAppointment(formData: FormData) {
  console.log({ formData });

  const endTime = moment(`${formData.get("date")} ${formData.get("time")}`)
    .add(30, "m")
    .format("hh:mm");

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    userId: formData.get("userId") as string,
    agenda: formData.get("agenda") as string,
    startTime: formData.get("time") as string,
    endTime: endTime,
    date: formData.get("date") as string,
    contactNumber: formData.get("contact") as string,
    dentistId: formData.get("dentist") as string,
  };

  const { data: result, status } = await axios.post(
    `${process.env.NEXT_PUBLIC_DENTALHUB_API}/appointments`,
    data
  );

  if (status !== 200) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
