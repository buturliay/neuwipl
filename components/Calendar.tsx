'use client';

import { useEffect, useState } from 'react';

interface CalendarEvent {
  date: string;
  title: string;
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year: number, month: number) {
  const days: Date[] = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function toLocalDateString(date: Date): string {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().split('T')[0];
}

export default function CalendarSection() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const calendarDays = [...Array(firstDayOfWeek).fill(null), ...daysInMonth];

  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    new Date(currentYear, currentMonth)
  );

  return (
    <section id="calendar" className="w-full px-6 py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button onClick={handlePrev} className="text-pink-600 font-semibold hover:underline">
            ← Previous
          </button>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 uppercase">
            {monthName} {currentYear}
          </h2>
          <button onClick={handleNext} className="text-pink-600 font-semibold hover:underline">
            Next →
          </button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-700 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-4">
          {calendarDays.map((date, index) => {
            const dateStr = date ? toLocalDateString(date) : '';
            const dayEvents = events.filter((e) => e.date === dateStr);

            return (
              <div
                key={index}
                className={`min-h-[100px] p-2 border border-pink-300 rounded-md text-sm text-left ${
                  date ? 'bg-white' : 'bg-transparent'
                }`}
              >
                {date && (
                  <>
                    <div className="font-semibold text-gray-800">
                      {date.getDate()}
                    </div>
                    <ul className="text-pink-600 mt-1 space-y-1">
                      {dayEvents.map((event, i) => (
                        <li key={i} className="text-xs">• {event.title}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
