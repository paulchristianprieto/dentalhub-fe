import { createAppointment } from "./actions";
import { createClient } from "@/utils/supabase/server";
import AppointmentForm from "./appointment-form";

export default async function BookingPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: dentists,
    error,
    count,
  } = await supabase.from("dentists").select("*").range(0, 9);

  console.log({ user, dentists, error, count });

  return <AppointmentForm user={user} dentists={dentists} />;
}
