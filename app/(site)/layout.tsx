import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingMenu } from "@/components/FloatingMenu";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getLocale } from "@/lib/i18n";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  let auth: { name: string; role: string } | null = null;

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from("gcm_profiles")
        .select("name, role")
        .eq("id", user.id)
        .maybeSingle();
      auth = {
        name: profile?.name || user.email || "회원",
        role: profile?.role || "student",
      };
    }
  }

  return (
    <LocaleProvider locale={locale}>
      <Navbar auth={auth} />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingMenu />
    </LocaleProvider>
  );
}
