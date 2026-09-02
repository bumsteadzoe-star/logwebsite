import type { CategoryKey } from "./itk-categories";
import type { Rating } from "./itk-ratings";

export interface ItkPhoto {
	id: string;
	url: string;
	alt_text: string;
	position: number;
}

export interface ItkPlace {
	id: string;
	position: number;
	name: string;
	description: string | null;
	address: string | null;
	phone: string | null;
	website_url: string | null;
	booking_label: string | null;
	booking_url: string | null;
	tags: string[];
	rating: Rating | null;
	event_date: string | null;
	event_time: string | null;
	itk_photos: ItkPhoto[];
}

export interface ItkPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	category: CategoryKey;
	city: string;
	date: string;
	cover_url: string;
	cover_alt: string;
	body_text: string;
	published: boolean;
	weekly_highlight: boolean;
	pinned: boolean;
	pin_rank: number | null;
	itk_places: ItkPlace[];
}

// Derived, never stored — one less thing to keep in sync with the address text.
export function mapsUrlFor(address: string): string {
	return `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
}

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Pinned posts always render first (in the order she arranged them), ahead
// of everything else, which falls back to newest-first — this is what makes
// a pinned post immune to being bumped by new/reordered content.
function orderPosts(posts: ItkPost[]): ItkPost[] {
	const pinned = [...posts.filter((p) => p.pinned)].sort(
		(a, b) => (a.pin_rank ?? 0) - (b.pin_rank ?? 0),
	);
	const unpinned = [...posts.filter((p) => !p.pinned)].sort(
		(a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf(),
	);
	return [...pinned, ...unpinned];
}

// Build-time only — called once from Astro frontmatter, never per-visitor,
// so the public pages stay fully static.
export async function fetchPublishedPosts(): Promise<ItkPost[]> {
	const res = await fetch(
		`${SUPABASE_URL}/rest/v1/itk_posts?select=*,itk_places(*,itk_photos(*))&published=eq.true`,
		{
			headers: {
				apikey: SUPABASE_ANON_KEY,
				Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
			},
		},
	);
	if (!res.ok) {
		throw new Error(`Failed to fetch In the Know posts: ${res.status} ${await res.text()}`);
	}
	const posts = (await res.json()) as ItkPost[];
	for (const post of posts) {
		post.itk_places.sort((a, b) => a.position - b.position);
		for (const place of post.itk_places) {
			place.itk_photos.sort((a, b) => a.position - b.position);
		}
	}
	return orderPosts(posts);
}
