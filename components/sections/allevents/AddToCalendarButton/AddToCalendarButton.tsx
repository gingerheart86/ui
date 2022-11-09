import React from "react";
import AddToCalendarButtonTooltip from "./Tooltip/AddToCalendarButtonTooltip";
import { CalendarEvent } from "./cal-event";

interface AddToCalendarButtonProps {
  calendarEvent: CalendarEvent;
}

export default function AddToCalendarButton({
  calendarEvent
}: AddToCalendarButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

  return (
    <React.Fragment>
      <div className="add-to-calendar-wrapper">
        <button className="add-to-calendar-button text-sm font-bold" onClick={handleClick}>
          Add to Calendar
        </button>
        {isTooltipVisible && (
          <AddToCalendarButtonTooltip calendarEvent={calendarEvent} />
        )}
      </div>
    </React.Fragment>
  );

  function handleClick(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsTooltipVisible(!isTooltipVisible);
  }
}
