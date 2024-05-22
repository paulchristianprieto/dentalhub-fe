import Landing from "@/components/landing";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <Landing user={user} />;
}
