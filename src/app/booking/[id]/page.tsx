import axios from "axios";
import AppointmentForm from "../appointment-form";
import { createClient } from "@/utils/supabase/server";

export default async function BookingViewPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { id } = params;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: dentists } = await supabase.from("dentists").select("*");

  const { data: appointment } = await axios.get(
    `${process.env.NEXT_PUBLIC_DENTALHUB_API}/appointments`,
    {
      data: {
        id: id,
      },
    }
  );

  return (
    <AppointmentForm
      user={user}
      dentists={dentists}
      appointment={appointment[0]}
    />
  );
}
