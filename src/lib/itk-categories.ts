export const CATEGORY_KEYS = [
	"Cafe",
	"Food",
	"Nightlife",
	"Shops",
	"Stays",
	"Nature",
	"Activity",
	"Arts & Culture",
	"Event",
] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];

// Matching/filtering always uses the key above; this only controls what's
// displayed as text, so "Event" reads as "Events" without touching data-*
// attributes or the category column's underlying value.
export const CATEGORY_LABELS: Record<CategoryKey, string> = {
	Cafe: "Cafe",
	Food: "Food",
	Nightlife: "Nightlife",
	Shops: "Shops",
	Stays: "Stays",
	Nature: "Nature",
	Activity: "Activity",
	"Arts & Culture": "Arts & Culture",
	Event: "Events",
};

export const CHIP_BY_CATEGORY: Record<CategoryKey, string> = {
	Cafe: "chip-brown",
	Food: "chip-terracotta",
	Nightlife: "chip-purple",
	Shops: "chip-blue",
	Nature: "chip-olive",
	Activity: "chip-gold",
	Stays: "chip-rose",
	"Arts & Culture": "chip",
	Event: "chip-claret",
};
