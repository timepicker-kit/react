import { format } from "date-fns";
import { TimeInput } from "../types/types";

export function formatTime(input: TimeInput): string {
  // Check if input is null or undefined
  if (!input) return "Please select a time";

  let date: Date;

  if (input instanceof Date) {
    date = input;
  } else if (typeof input === "string") {
    const parsedDate = new Date(input);
    if (isNaN(parsedDate.getTime())) {
      return "Please select a time"; // Handle invalid date string
    }
    date = parsedDate;
  } else if (
    typeof input === "object" &&
    "hour" in input &&
    "minute" in input &&
    "period" in input
  ) {
    const { hour, minute, period } = input;

    if (hour == null || minute == null || period == null) {
      return "Please select a time"; // Handle incomplete or missing time data
    }

    const hours24 = period === "PM" ? (hour % 12) + 12 : hour % 12;

    // Construct a valid Date object for formatting
    date = new Date();
    date.setHours(hours24, minute, 0, 0);
  } else {
    return "Please select a time"; // Handle invalid TimeInput
  }

  // Format the Date object to "hh:mm a"
  return format(date, "hh:mm a");
}
