import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const cookieStore = cookies();

const supabase = createServerComponentClient({
  cookies: () => cookieStore,
});

export default supabase;
