import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Filters({ onDateRangeChange }: { onDateRangeChange: (range: { start: Date; end: Date }) => void }) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  const handleApply = () => {
    if (startDate && endDate) {
      onDateRangeChange({ start: startDate, end: endDate });
      setOpen(false);
    }
  };

  return (
    <div className="filter-container">
      <button onClick={() => setOpen(!open)} className="filter-button">
         Past 6 Months ▾
      </button>
      {open && (
        <div className="calendar-popup">
          <div className="calendar-section">
            <label>From:</label>
            <DatePicker
              selected={startDate ?? undefined}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              inline
            />
          </div>
          <div className="calendar-section">
            <label>To:</label>
            <DatePicker
              selected={endDate ?? undefined}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate ?? undefined}
              inline
            />
          </div>
          <div className="filter-footer">
            <button onClick={handleApply} className="apply-button">Apply</button>
            <button onClick={() => setOpen(false)} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
