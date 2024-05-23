"use client";

import { type User } from "@supabase/supabase-js";
import { createAppointment, updateAppointment } from "./actions";
import { AppointmentI } from "../account/appointments";

export interface DentistI {
  id: string;
  name: string;
  schedule: any;
}

export default function AppointmentForm({
  user,
  dentists = [],
  appointment,
}: {
  user: User | null;
  dentists: DentistI[] | null;
  appointment?: AppointmentI;
}) {
  return (
    <form>
      <label htmlFor="dentist">Dentist:</label>
      <select
        defaultValue={appointment ? appointment.dentists?.id : ""}
        className="text-black"
        name="dentist"
        id="dentist"
        required
      >
        {dentists?.map((dentist) => {
          return (
            <option
              className="text-black"
              key={dentist.id}
              value={dentist.id}
            >
              {dentist.name}
            </option>
          );
        })}
      </select>

      <label htmlFor="contact">Contact Number:</label>
      <input
        defaultValue={appointment ? appointment.contactNumber : ""}
        id="contact"
        name="contact"
        type="text"
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        defaultValue={appointment ? appointment.date : ""}
        id="date"
        name="date"
        type="date"
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        defaultValue={appointment ? appointment.startTime : ""}
        id="time"
        name="time"
        type="time"
        required
      />

      <label htmlFor="agenda">Agenda:</label>
      <input
        defaultValue={appointment ? appointment.agenda : ""}
        id="agenda"
        name="agenda"
        type="text"
        required
      />

      <input
        defaultValue={appointment ? appointment.userId : ""}
        name="userId"
        type="hidden"
        value={user?.id}
      />

      <input
        defaultValue={appointment ? appointment.id : ""}
        name="id"
        type="hidden"
      />

      <button formAction={appointment ? updateAppointment : createAppointment}>
        {appointment ? "Update" : "Bookit"}
      </button>
    </form>
  );
}
