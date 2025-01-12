import React, { useState } from "react";
import "../styles/global.css";
import ReactDOM from "react-dom/client";
import { TimePicker } from "../react/components/TimePicker";
import {
  Popover,
  PopoverButton,
  PopoverContent,
  PopoverTrigger,
} from "../react/components/Popover";
import { TimeInput } from "../react/types/types";

const ReactDemo = () => {
  const [time, setTime] = useState<TimeInput>(new Date());

  const handleTimeChange = (newTime: TimeInput) => {
    setTime(newTime);
    console.log("New Time", newTime);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 space-y-4">
      <h1 className="mt-20 mb-4 text-2xl font-bold">Timepick-kit React</h1>

      <Popover>
        <PopoverTrigger>
          <PopoverButton time={time} />
        </PopoverTrigger>
        <PopoverContent>
          <TimePicker value={time} onChange={handleTimeChange} />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <PopoverButton time={time} />
        </PopoverTrigger>
        <PopoverContent>
          <TimePicker value={time} onChange={handleTimeChange} />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <PopoverButton time={time} />
        </PopoverTrigger>
        <PopoverContent>
          <TimePicker value={time} onChange={handleTimeChange} />
        </PopoverContent>
      </Popover>

      <div className="flex flex-col items-center justify-center space-y-4 ">
        <div className="mt-40 space-y-2 ">
          <h2 className="text-lg font-semibold">Try different input types:</h2>
          <button
            className="px-4 py-2 mr-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setTime(new Date())}>
            Set to current time (Date object)
          </button>
          <button
            className="px-4 py-2 mr-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setTime("2023-05-15T14:30:00")}>
            Set to 2:30 PM (ISO string)
          </button>
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setTime({ hour: 9, minute: 45, period: "AM" })}>
            Set to 9:45 AM (Time object)
          </button>
        </div>

        <button
          className="px-4 py-2 mt-4 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90"
          onClick={() => document.documentElement.classList.toggle("dark")}>
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
};

// Mount React
ReactDOM.createRoot(document.getElementById("react-root")!).render(
  <React.StrictMode>
    <ReactDemo />
  </React.StrictMode>
);
