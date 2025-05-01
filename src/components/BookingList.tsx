import React from "react";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, Calendar as CalendarIcon, Scissors } from "lucide-react";
import { BookingData } from "./BookingCalendar";

interface BookingListProps {
  bookings: BookingData[];
  selectedDate: Date | undefined;
}

const BookingList = ({ bookings = [], selectedDate }: BookingListProps) => {
  // Filter bookings for the selected date
  const filteredBookings = selectedDate
    ? bookings.filter(
        (booking) =>
          format(booking.date, "yyyy-MM-dd") ===
          format(selectedDate, "yyyy-MM-dd")
      )
    : [];

  return (
    <Card className="bg-white shadow">
      <CardContent className="p-4">
        <h3 className="text-lg font-medium mb-4">
          {selectedDate
            ? `Bookings for ${format(selectedDate, "MMMM d, yyyy")}`
            : "Select a date to see bookings"}
        </h3>

        {filteredBookings.length > 0 ? (
          <ScrollArea className="h-[250px] rounded-md">
            <div className="space-y-4 pr-3">
              {filteredBookings.map((booking, index) => (
                <React.Fragment key={booking.id}>
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-100 p-2 rounded-md">
                      <Clock className="h-4 w-4 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{booking.time}</p>
                          <p className="text-sm text-gray-500">
                            {booking.name}
                          </p>
                        </div>
                        <div className="bg-pink-50 text-pink-700 text-xs px-2 py-1 rounded-full flex items-center">
                          <Scissors className="h-3 w-3 mr-1" />
                          {booking.service === "nail-painting"
                            ? "Nail Painting"
                            : booking.service === "gel-coating"
                            ? "Gel Coating"
                            : "Custom Nail Art"}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < filteredBookings.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        ) : selectedDate ? (
          <div className="py-8 text-center">
            <CalendarIcon className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-600">
              No bookings for this date
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This date is completely available.
            </p>
          </div>
        ) : (
          <div className="py-8 text-center">
            <CalendarIcon className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-600">
              Select a date
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Choose a date to see available time slots.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingList;
