"use client";

import { type User } from "@supabase/supabase-js";
import {
  createAppointment,
  deleteAppointment,
  updateAppointment,
} from "./actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppointmentI } from "../appointments/appointments";

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
    <div className="p-4 mt-8 max-w-96 mx-auto">
      <form>
        <label htmlFor="dentist">Dentist:</label>
        <select
          defaultValue={appointment ? appointment.dentists?.id : ""}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-slate-700 text-gray-900"
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
          name="userId"
          type="hidden"
          value={appointment ? appointment.userId : user?.id}
        />

        <input
          value={appointment ? appointment.id : ""}
          name="id"
          type="hidden"
        />

        <button
          className="mt-4 mr-2"
          formAction={appointment ? updateAppointment : createAppointment}
        >
          {appointment ? "Update" : "Submit"}
        </button>

        {appointment ? (
          <button
            className="mt-4 button secondary hover:bg-slate-700"
            onClick={() => deleteAppointment(appointment.id)}
          >
            Cancel
          </button>
        ) : null}
      </form>
    </div>
  );
}
