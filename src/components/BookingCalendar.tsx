import React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

export interface BookingData {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  notes?: string;
}

interface BookingCalendarProps {
  bookings: BookingData[];
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
}

const BookingCalendar = ({
  bookings = [],
  selectedDate,
  onDateSelect = () => {},
}: BookingCalendarProps) => {
  // Group bookings by date
  const bookingsByDate = (bookings || []).reduce<Record<string, BookingData[]>>(
    (acc, booking) => {
      const dateStr = format(booking.date, "yyyy-MM-dd");
      if (!acc[dateStr]) {
        acc[dateStr] = [];
      }
      acc[dateStr].push(booking);
      return acc;
    },
    {},
  );

  // Get dates that are fully booked (all time slots taken)
  const getBookedDates = () => {
    const fullyBookedDates: Record<string, boolean> = {};

    // For simplicity, consider a date fully booked if it has 8 or more bookings
    // In a real app, you would check against available time slots
    Object.entries(bookingsByDate).forEach(([dateStr, dateBookings]) => {
      if (dateBookings.length >= 8) {
        fullyBookedDates[dateStr] = true;
      }
    });

    return fullyBookedDates;
  };

  const fullyBookedDates = getBookedDates();

  return (
    <div className="bg-white rounded-md shadow p-4">
      <h3 className="text-lg font-medium mb-4 text-center">Available Dates</h3>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onDateSelect}
        className="rounded-md mx-auto max-w-max"
        disabled={(date) => {
          // Disable past dates, Sundays, and fully booked dates
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const dateStr = format(date, "yyyy-MM-dd");
          return (
            date < today || date.getDay() === 0 || fullyBookedDates[dateStr]
          );
        }}
        modifiers={{
          booked: (date) => {
            const dateStr = format(date, "yyyy-MM-dd");
            return (
              !!bookingsByDate[dateStr] && bookingsByDate[dateStr].length > 0
            );
          },
        }}
        modifiersClassNames={{
          booked: "bg-orange-100 text-orange-800 hover:bg-orange-200",
        }}
        footer={
          <div className="mt-3 text-xs text-center space-y-1">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-100 border border-orange-300"></div>
              <span>Partially booked</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
              <span>Fully booked</span>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default BookingCalendar;
