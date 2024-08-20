import { PermanencyType } from "@/types/types";
import { pastelBgColors } from "../middleware/const";

export function getRandomPastelColor() {
  return pastelBgColors[Math.floor(Math.random() * pastelBgColors.length)];
}

export function parseDate(createdAt: Date) {
  // parse date to format like "mionutes ago - hours ago - days ago - weeks ago - months ago - years ago"
  const currentDate = new Date();
  const difference = currentDate.getTime() - createdAt.getTime();
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years}y ago`;
  if (months > 0) return `${months}m ago`;
  if (weeks > 0) return `${weeks}w ago`;
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours} hours ago`;
  if (minutes > 0) return `${minutes}min ago`;
  return `${seconds} seconds ago`;
}

export function parsePermanency(permanency: PermanencyType) {
  const values = {
    FULL_TIME: "Full Time",
    PART_TIME: "Part Time",
    CONTRACT: "Contract",
    INTERNSHIP: "Internship",
  };
  return values[permanency];
}

export function isListingNew(formattedCreatedAt: string) {
  return (
    formattedCreatedAt.includes("hours") ||
    formattedCreatedAt.includes("minutes") ||
    formattedCreatedAt === "1d ago"
  );
}
