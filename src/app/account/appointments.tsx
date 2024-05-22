"use client";

export interface DentistI {
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
}: {
  appointments: AppointmentI[] | null;
}) {
  return (
    <>
      <h1 className="font-bold text-2xl">Upcoming Appointments</h1>
      {appointments?.map((appointment) => {
        return (
          <div key={appointment.id} className="pb-4">
            <p>Doctor: {appointment?.dentists?.name}</p>
            <p>Agenda: {appointment?.agenda}</p>
            <p>Date: {appointment?.date}</p>
            <p>Time: {`${appointment.startTime} - ${appointment.endTime}`}</p>
          </div>
        );
      })}
    </>
  );
}
