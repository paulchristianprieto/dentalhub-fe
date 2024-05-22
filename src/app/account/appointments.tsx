"use client";

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
}

export default function Appointments({
  appointments,
}: {
  appointments: AppointmentI[] | null;
}) {
  return appointments?.map((appointment) => {
    return (
      <div key={appointment.id}>
        <p>{appointment?.contactNumber}</p>
      </div>
    );
  });
}
