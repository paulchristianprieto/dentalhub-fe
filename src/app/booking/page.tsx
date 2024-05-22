import { createAppointment } from "./actions";
import { createClient } from "@/utils/supabase/server";
import AppointmentForm from "./appointment-form";

export default async function BookingPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: dentists } = await supabase.from("dentists").select("*");

  return <AppointmentForm user={user} dentists={dentists} />;
}
