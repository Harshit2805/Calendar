import React, { useState } from 'react';
import './calendar.css';

interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  // Extract year, month, and day from the date prop
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Calculate the first day of the month and the total days in the month
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const totalDays = lastDayOfMonth.getDate();

  // Calculate the day of the week for the first day of the month
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Create an array of day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Create an array of days in the month
  const daysInMonth = Array.from({ length: totalDays }, (_, index) =>
    new Date(year, month, index + 1)
  );

  // Calculate the index of the highlighted date
  const highlightedIndex = daysInMonth.findIndex(
    (dayInMonth) =>
      dayInMonth.getFullYear() === year &&
      dayInMonth.getMonth() === month &&
      dayInMonth.getDate() === day
  );

  return (
    <div className="calendar">
      <div className="calendar-header">
        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date)}
      </div>
      <div className="calendar-weekdays">
        {dayNames.map((dayName) => (
          <div key={dayName} className="calendar-weekday">
            {dayName}
          </div>
        ))}
      </div>
      <div className="calendar-days">
        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty"></div>
        ))}
        {daysInMonth.map((dayInMonth, index) => (
          <div
            key={index}
            className={`calendar-day ${index === highlightedIndex ? 'highlighted' : ''}`}
          >
            {dayInMonth.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;