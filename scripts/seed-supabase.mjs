// One-time migration: reads the placeholder src/content/in-the-know/*.md posts
// and loads them into the itk_posts table + itk-photos storage bucket.
// Run once locally: node scripts/seed-supabase.mjs
// Requires PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.

import { createClient } from "@supabase/supabase-js";
import ws from "ws";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "node:fs";
import { extname, join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
process.loadEnvFile(resolve(__dirname, "../.env"));
const postsDir = resolve(__dirname, "../src/content/in-the-know");

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceRoleKey) {
	console.error("Missing PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
	process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
	auth: { autoRefreshToken: false, persistSession: false },
	realtime: { transport: ws },
});

const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));
console.log(`Found ${files.length} posts to seed.`);

for (const file of files) {
	const slug = file.replace(/\.md$/, "");
	const raw = readFileSync(join(postsDir, file), "utf8");
	const { data, content } = matter(raw);

	// cover: "../../assets/gallery2/matcha.jpg" is relative to the post file's
	// own directory, matching how Astro's image() schema helper resolves it.
	const coverPath = resolve(postsDir, data.cover);
	const coverBytes = readFileSync(coverPath);
	const ext = extname(coverPath).slice(1) || "jpg";
	const storagePath = `covers/${slug}.${ext}`;

	const { error: uploadError } = await supabase.storage
		.from("itk-photos")
		.upload(storagePath, coverBytes, {
			contentType: ext === "png" ? "image/png" : "image/jpeg",
			upsert: true,
		});
	if (uploadError) {
		console.error(`  ✗ ${slug}: cover upload failed —`, uploadError.message);
		continue;
	}

	const { data: publicUrlData } = supabase.storage.from("itk-photos").getPublicUrl(storagePath);

	const { error: upsertError } = await supabase.from("itk_posts").upsert(
		{
			slug,
			title: data.title,
			excerpt: data.excerpt,
			category: data.category,
			city: data.city,
			date: new Date(data.date).toISOString().slice(0, 10),
			cover_url: publicUrlData.publicUrl,
			cover_alt: data.coverAlt,
			body_text: content.trim(),
			published: true,
			weekly_highlight: Boolean(data.weeklyHighlight),
			pinned: false,
		},
		{ onConflict: "slug" },
	);

	if (upsertError) {
		console.error(`  ✗ ${slug}: row upsert failed —`, upsertError.message);
		continue;
	}

	console.log(`  ✓ ${slug}`);
}

console.log("Done.");
