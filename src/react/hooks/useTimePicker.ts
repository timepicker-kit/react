import { useState, useCallback } from "react";

import { parseISO, format } from "date-fns";
import { Period, Time, TimeInput } from "../types/types";

export function parseTimeInput(input: TimeInput): Time {
  if (input instanceof Date) {
    return {
      hour: parseInt(format(input, "hh")), // Extract 12-hour format hour
      minute: parseInt(format(input, "mm")),
      period: format(input, "a") as Period, // AM/PM
    };
  } else if (typeof input === "string") {
    try {
      const date = parseISO(input); // Parses ISO string
      return {
        hour: parseInt(format(date, "hh")),
        minute: parseInt(format(date, "mm")),
        period: format(date, "a") as Period,
      };
    } catch (error) {
      console.log(error);
      throw new Error("Invalid date string");
    }
  } else if (
    typeof input === "object" &&
    "hour" in input &&
    "minute" in input &&
    "period" in input
  ) {
    return input;
  }
  throw new Error("Invalid time input");
}

// Type guard to check if TimeInput is of type Time
function isTime(value: TimeInput): value is Time {
  return (
    typeof value === "object" &&
    value !== null &&
    "hour" in value &&
    "minute" in value &&
    "period" in value
  );
}

export function useTimePicker(value: TimeInput) {
  const [time, setTime] = useState<Time>(() => {
    if (isTime(value)) {
      return value; // If it's a valid Time, use it directly
    }

    // Handle other cases like Date or string here:
    if (value instanceof Date) {
      return {
        hour: value.getHours() % 12 || 12, // Convert to 12-hour format
        minute: value.getMinutes(),
        period: value.getHours() >= 12 ? "PM" : "AM", // Determine period (AM/PM)
      };
    }

    if (typeof value === "string") {
      const parsedDate = new Date(value);
      if (isNaN(parsedDate.getTime())) {
        // Invalid string, default to a safe state
        return { hour: 12, minute: 0, period: "AM" };
      }
      return {
        hour: parsedDate.getHours() % 12 || 12,
        minute: parsedDate.getMinutes(),
        period: parsedDate.getHours() >= 12 ? "PM" : "AM",
      };
    }

    // Default state if no valid value
    return { hour: 12, minute: 0, period: "AM" };
  });

  const setHour = useCallback((hour: number) => {
    setTime((prev) => ({ ...prev, hour: hour % 12 || 12 }));
  }, []);

  const setMinute = useCallback((minute: number) => {
    setTime((prev) => ({ ...prev, minute: minute % 60 }));
  }, []);

  const setPeriod = useCallback((period: Period) => {
    setTime((prev) => ({ ...prev, period }));
  }, []);

  const validateHour = useCallback(
    (value: string) => {
      const hour = parseInt(value, 10);
      return hour >= 1 && hour <= 12 ? hour : time.hour;
    },
    [time.hour]
  );

  const validateMinute = useCallback(
    (value: string) => {
      const minute = parseInt(value, 10);
      return minute >= 0 && minute <= 59 ? minute : time.minute;
    },
    [time.minute]
  );

  return { time, setHour, setMinute, setPeriod, validateHour, validateMinute };
}
