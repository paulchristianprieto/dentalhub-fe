"use client";

import { useCallback, useEffect, useState } from "react";
import { type User } from "@supabase/supabase-js";
import { createAppointment } from "./actions";

export interface DentistI {
  id: string;
  name: string;
  schedule: any;
}

export default function AppointmentForm({
  user,
  dentists = [],
}: {
  user: User | null;
  dentists: DentistI[] | null;
}) {
  return (
    <form>
      <label htmlFor="dentist">Dentist:</label>
      <select name="dentist" id="dentist" required>
        {dentists?.map((dentist) => {
          return (
            <option key={dentist.id} value={dentist.id}>
              {dentist.name}
            </option>
          );
        })}
      </select>

      <label htmlFor="contact">Contact Number:</label>
      <input id="contact" name="contact" type="text" required />

      <label htmlFor="date">Date:</label>
      <input id="date" name="date" type="date" required />

      <label htmlFor="time">Time:</label>
      <input id="time" name="time" type="time" required />

      <label htmlFor="agenda">Agenda:</label>
      <input id="agenda" name="agenda" type="text" required />

      <input name="userId" type="hidden" value={user?.id} />

      <button formAction={createAppointment}>Bookit</button>
    </form>
  );
}
