import axios from "axios";
import AccountForm from "./account-form";
import { createClient } from "@/utils/supabase/server";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="p-4 mt-8">
      <AccountForm user={user} />
    </div>
  );
}
