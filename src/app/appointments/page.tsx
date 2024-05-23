import axios from "axios";
import AccountForm from "../account/account-form";
import { createClient } from "@/utils/supabase/server";
import Appointments from "./appointments";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: appointments } = await axios.get(
    `${process.env.NEXT_PUBLIC_DENTALHUB_API}/appointments`,
    {
      data: {
        userId: user?.id,
      },
    }
  );

  return (
    <div className="p-4 mt-8">
      <Appointments appointments={appointments} user={user} />
    </div>
  );
}
