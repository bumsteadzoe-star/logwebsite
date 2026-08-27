import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
);

// Every protected admin page calls this first. The redirect is a UX
// convenience only — the real security boundary is Postgres RLS scoped to
// one fixed admin user, since a static site has no server to gate anything.
export async function requireSession() {
	const { data } = await supabase.auth.getSession();
	if (!data.session) {
		window.location.href = "/admin/login";
		return null;
	}
	return data.session;
}

export function mapsUrlFor(address: string): string {
	return `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
}
