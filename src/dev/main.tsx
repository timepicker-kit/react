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
    <div style={{ padding: "20px" }}>
      <Popover>
        <PopoverTrigger>
          <PopoverButton time={time} className="" />
        </PopoverTrigger>
        <PopoverContent>
          <TimePicker value={time} onChange={handleTimeChange} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

// Mount React
ReactDOM.createRoot(document.getElementById("react-root")!).render(
  <React.StrictMode>
    <ReactDemo />
  </React.StrictMode>
);
