import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import BookingCalendar, { BookingData } from "@/components/BookingCalendar";
import BookingList from "@/components/BookingList";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Trash2,
  LogOut,
  Edit,
  Bell,
  Calendar,
  CalendarClock,
  Users,
  Sparkles,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockBookings } from "@/data/Bookings";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [bookings, setBookings] = useState<BookingData[]>(mockBookings);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [editingBooking, setEditingBooking] = useState<BookingData | null>(
    null
  );
  const [notificationSent, setNotificationSent] = useState<
    Record<string, boolean>
  >({});

  const navigate = useNavigate();

  // Simple authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  const handleCancelBooking = (id: string) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
    // Save to localStorage
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings.filter((booking) => booking.id !== id))
    );
  };

  const handleEditBooking = (booking: BookingData) => {
    setEditingBooking({ ...booking });
  };

  const handleSaveBooking = () => {
    if (!editingBooking) return;

    const updatedBookings = bookings.map((booking) =>
      booking.id === editingBooking.id ? editingBooking : booking
    );

    setBookings(updatedBookings);
    // Save to localStorage
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setEditingBooking(null);
  };

  const handleSendNotification = (id: string) => {
    // In a real app, this would send an actual notification
    // For now, we'll just mark it as sent
    setNotificationSent((prev) => ({
      ...prev,
      [id]: true,
    }));

    setTimeout(() => {
      alert(`Notification sent to client for booking #${id}`);
    }, 500);
  };

  // Load bookings from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      try {
        const parsedBookings = JSON.parse(savedBookings);
        // Convert string dates back to Date objects
        const bookingsWithDates = parsedBookings.map((booking: any) => ({
          ...booking,
          date: new Date(booking.date),
        }));
        setBookings(bookingsWithDates);
      } catch (e) {
        console.error("Error parsing bookings from localStorage", e);
      }
    } else {
      // Initialize localStorage with mock data
      localStorage.setItem("bookings", JSON.stringify(mockBookings));
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-pink-600">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700"
              >
                Login
              </Button>
              <div className="text-center mt-4">
                <Button
                  variant="link"
                  className="text-gray-500 text-sm"
                  onClick={() => navigate("/")}
                >
                  Return to Homepage
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-pink-600">
              Admin Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your appointments and clients
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-pink-50 p-2 rounded-full">
              <Bell size={20} className="text-pink-600" />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-pink-200 hover:bg-pink-50"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card className="bg-gradient-to-br from-pink-50 to-white border-pink-100">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Today's Appointments</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">
                    {
                      bookings.filter(
                        (booking) =>
                          format(booking.date, "yyyy-MM-dd") ===
                          format(new Date(), "yyyy-MM-dd")
                      ).length
                    }
                  </h3>
                </div>
                <div className="bg-pink-100 p-2 rounded-full">
                  <Calendar size={20} className="text-pink-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Upcoming Appointments</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">
                    {
                      bookings.filter((booking) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const bookingDate = new Date(booking.date);
                        bookingDate.setHours(0, 0, 0, 0);
                        return bookingDate > today;
                      }).length
                    }
                  </h3>
                </div>
                <div className="bg-purple-100 p-2 rounded-full">
                  <CalendarClock size={20} className="text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Total Clients</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">
                    {new Set(bookings.map((booking) => booking.email)).size}
                  </h3>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users size={20} className="text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Popular Service</p>
                  <h3 className="text-lg font-bold text-gray-800 mt-1">
                    {Object.entries(
                      bookings.reduce((acc, booking) => {
                        acc[booking.service] = (acc[booking.service] || 0) + 1;
                        return acc;
                      }, {} as Record<string, number>)
                    ).sort((a, b) => b[1] - a[1])[0]?.[0] === "nail-painting"
                      ? "Nail Painting"
                      : Object.entries(
                          bookings.reduce((acc, booking) => {
                            acc[booking.service] =
                              (acc[booking.service] || 0) + 1;
                            return acc;
                          }, {} as Record<string, number>)
                        ).sort((a, b) => b[1] - a[1])[0]?.[0] === "gel-coating"
                      ? "Gel Coating"
                      : "Custom Nail Art"}
                  </h3>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <Sparkles size={20} className="text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="mb-4 bg-gray-100">
            <TabsTrigger
              value="bookings"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600"
            >
              Bookings
            </TabsTrigger>
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600"
            >
              Calendar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Today's Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3">Time</th>
                        <th className="text-left p-3">Client</th>
                        <th className="text-left p-3">Service</th>
                        <th className="text-left p-3">Contact</th>
                        <th className="text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings
                        .filter(
                          (booking) =>
                            format(booking.date, "yyyy-MM-dd") ===
                            format(new Date(), "yyyy-MM-dd")
                        )
                        .sort((a, b) => a.time.localeCompare(b.time))
                        .map((booking) => (
                          <tr
                            key={booking.id}
                            className="border-b hover:bg-gray-50"
                          >
                            <td className="p-3">{booking.time}</td>
                            <td className="p-3">{booking.name}</td>
                            <td className="p-3">
                              {booking.service === "nail-painting"
                                ? "Nail Painting"
                                : booking.service === "gel-coating"
                                ? "Gel Coating"
                                : "Custom Nail Art"}
                            </td>
                            <td className="p-3">{booking.phone}</td>
                            <td className="p-3 flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                                    onClick={() => handleEditBooking(booking)}
                                  >
                                    <Edit size={16} />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Edit Appointment</DialogTitle>
                                    <DialogDescription>
                                      Make changes to this appointment.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="name"
                                        className="text-right"
                                      >
                                        Name
                                      </Label>
                                      <Input
                                        id="name"
                                        value={editingBooking?.name || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  name: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="email"
                                        className="text-right"
                                      >
                                        Email
                                      </Label>
                                      <Input
                                        id="email"
                                        value={editingBooking?.email || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  email: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="phone"
                                        className="text-right"
                                      >
                                        Phone
                                      </Label>
                                      <Input
                                        id="phone"
                                        value={editingBooking?.phone || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  phone: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="service"
                                        className="text-right"
                                      >
                                        Service
                                      </Label>
                                      <Select
                                        onValueChange={(value) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? { ...prev, service: value }
                                              : null
                                          )
                                        }
                                        defaultValue={editingBooking?.service}
                                      >
                                        <SelectTrigger className="col-span-3">
                                          <SelectValue placeholder="Select service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="nail-painting">
                                            Nail Painting
                                          </SelectItem>
                                          <SelectItem value="gel-coating">
                                            Gel Coating
                                          </SelectItem>
                                          <SelectItem value="custom-nail-art">
                                            Custom Nail Art
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="time"
                                        className="text-right"
                                      >
                                        Time
                                      </Label>
                                      <Input
                                        id="time"
                                        value={editingBooking?.time || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  time: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="notes"
                                        className="text-right"
                                      >
                                        Notes
                                      </Label>
                                      <Input
                                        id="notes"
                                        value={editingBooking?.notes || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  notes: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button
                                      type="submit"
                                      onClick={handleSaveBooking}
                                    >
                                      Save changes
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>

                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-amber-500 hover:text-amber-700 hover:bg-amber-50"
                                onClick={() =>
                                  handleSendNotification(booking.id)
                                }
                                disabled={notificationSent[booking.id]}
                              >
                                <Bell size={16} />
                              </Button>

                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  >
                                    <Trash2 size={16} />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      Cancel Appointment
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to cancel this
                                      appointment? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      No, keep it
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      className="bg-red-500 hover:bg-red-600"
                                      onClick={() =>
                                        handleCancelBooking(booking.id)
                                      }
                                    >
                                      Yes, cancel it
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>

                  {bookings.filter(
                    (booking) =>
                      format(booking.date, "yyyy-MM-dd") ===
                      format(new Date(), "yyyy-MM-dd")
                  ).length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No appointments scheduled for today
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Time</th>
                        <th className="text-left p-3">Client</th>
                        <th className="text-left p-3">Service</th>
                        <th className="text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings
                        .filter((booking) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          const bookingDate = new Date(booking.date);
                          bookingDate.setHours(0, 0, 0, 0);
                          return bookingDate > today;
                        })
                        .sort((a, b) => a.date.getTime() - b.date.getTime())
                        .map((booking) => (
                          <tr
                            key={booking.id}
                            className="border-b hover:bg-gray-50"
                          >
                            <td className="p-3">
                              {format(booking.date, "MMM dd, yyyy")}
                            </td>
                            <td className="p-3">{booking.time}</td>
                            <td className="p-3">{booking.name}</td>
                            <td className="p-3">
                              {booking.service === "nail-painting"
                                ? "Nail Painting"
                                : booking.service === "gel-coating"
                                ? "Gel Coating"
                                : "Custom Nail Art"}
                            </td>
                            <td className="p-3 flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                                    onClick={() => handleEditBooking(booking)}
                                  >
                                    <Edit size={16} />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Edit Appointment</DialogTitle>
                                    <DialogDescription>
                                      Make changes to this appointment.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="name"
                                        className="text-right"
                                      >
                                        Name
                                      </Label>
                                      <Input
                                        id="name"
                                        value={editingBooking?.name || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  name: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="email"
                                        className="text-right"
                                      >
                                        Email
                                      </Label>
                                      <Input
                                        id="email"
                                        value={editingBooking?.email || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  email: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="phone"
                                        className="text-right"
                                      >
                                        Phone
                                      </Label>
                                      <Input
                                        id="phone"
                                        value={editingBooking?.phone || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  phone: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="service"
                                        className="text-right"
                                      >
                                        Service
                                      </Label>
                                      <Select
                                        onValueChange={(value) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? { ...prev, service: value }
                                              : null
                                          )
                                        }
                                        defaultValue={editingBooking?.service}
                                      >
                                        <SelectTrigger className="col-span-3">
                                          <SelectValue placeholder="Select service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="nail-painting">
                                            Nail Painting
                                          </SelectItem>
                                          <SelectItem value="gel-coating">
                                            Gel Coating
                                          </SelectItem>
                                          <SelectItem value="custom-nail-art">
                                            Custom Nail Art
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="time"
                                        className="text-right"
                                      >
                                        Time
                                      </Label>
                                      <Input
                                        id="time"
                                        value={editingBooking?.time || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  time: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="notes"
                                        className="text-right"
                                      >
                                        Notes
                                      </Label>
                                      <Input
                                        id="notes"
                                        value={editingBooking?.notes || ""}
                                        onChange={(e) =>
                                          setEditingBooking((prev) =>
                                            prev
                                              ? {
                                                  ...prev,
                                                  notes: e.target.value,
                                                }
                                              : null
                                          )
                                        }
                                        className="col-span-3"
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button
                                      type="submit"
                                      onClick={handleSaveBooking}
                                    >
                                      Save changes
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>

                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-amber-500 hover:text-amber-700 hover:bg-amber-50"
                                onClick={() =>
                                  handleSendNotification(booking.id)
                                }
                                disabled={notificationSent[booking.id]}
                              >
                                <Bell size={16} />
                              </Button>

                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  >
                                    <Trash2 size={16} />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      Cancel Appointment
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to cancel this
                                      appointment? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      No, keep it
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      className="bg-red-500 hover:bg-red-600"
                                      onClick={() =>
                                        handleCancelBooking(booking.id)
                                      }
                                    >
                                      Yes, cancel it
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>

                  {bookings.filter((booking) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const bookingDate = new Date(booking.date);
                    bookingDate.setHours(0, 0, 0, 0);
                    return bookingDate > today;
                  }).length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No upcoming appointments
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <BookingCalendar
                  bookings={bookings}
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                />
              </div>
              <div className="md:col-span-2">
                <BookingList bookings={bookings} selectedDate={selectedDate} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
