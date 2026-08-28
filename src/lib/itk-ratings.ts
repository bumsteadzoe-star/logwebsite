export const RATING_VALUES = ["Recommend", "Meh", "Don't Recommend"] as const;

export type Rating = (typeof RATING_VALUES)[number];

export const RATING_CHIP_CLASS: Record<Rating, string> = {
	Recommend: "chip",
	Meh: "bg-accent text-sand rounded-full",
	"Don't Recommend": "chip-claret",
};
