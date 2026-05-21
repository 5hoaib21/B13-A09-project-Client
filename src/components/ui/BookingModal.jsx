"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";

export function BookingModal({ setOpen, room }) {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  // console.log(user);
  // console.log(room, "room id hhhhhhhhhhhh");
  const roomRate = room.rent;

  // const [open, setOpen] = useState(false);

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("11:00");
  const [specialNote, setSpecialNote] = useState("");

  // বুকিংয়ের প্রতি ঘণ্টার রেট
  const hourlyRate = roomRate;

  // মোট খরচ হিসাব
  const calculateTotalCost = () => {
    const start = parseInt(startTime.split(":")[0]);
    const end = parseInt(endTime.split(":")[0]);

    if (end > start) {
      return (end - start) * hourlyRate;
    }

    return 0;
  };

  const totalCost = calculateTotalCost();

  const handleConfirm = async (e) => {
    e.preventDefault();

    const bookingData = {
      // userId = user.id,
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      roomId: room?._id,
      roomName: room?.room_name,
      date: new Date(date),
      startTime,
      endTime,
      specialNote,
      totalCost,
    };
    const res = await fetch(`http://localhost:8008/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    console.log(data);

    // modal close
    setOpen(false);
  };

  return (
    <>
      {/* ওপেন করার বাটন */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-[#1E2E24] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#152019] transition-colors"
      >
        Open Booking Modal
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 font-sans">
          {/* মোডাল কন্টেইনার */}
          <div className="relative w-full max-w-md rounded-2xl bg-[#FBF9F4] p-6 shadow-xl text-[#2D3732]">
            {/* ক্লোজ বাটন */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* হেডার */}
            <div className="mb-5">
              <h2 className=" font-serif  text-[#1E2E24]">
                <span className="text-xl">Book </span>
                <span className="font-bold">{room?.room_name}</span>
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Pick a date and time slot. Bookings run on the hour.
              </p>
            </div>

            {/* ফর্ম */}
            <form onSubmit={handleConfirm} className="space-y-4">
              {/* ডেট */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#FAF7F0] px-4 py-2.5 text-sm focus:border-[#1E2E24] focus:outline-none"
                />
              </div>

              {/* টাইম */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Start
                  </label>

                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#FAF7F0] px-4 py-2.5 text-sm"
                  >
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    End
                  </label>

                  <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#FAF7F0] px-4 py-2.5 text-sm"
                  >
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                  </select>
                </div>
              </div>

              {/* নোট */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Special note
                </label>

                <textarea
                  rows="3"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="Any setup needed?"
                  className="w-full rounded-xl border border-gray-200 bg-[#FAF7F0] px-4 py-2.5 text-sm resize-none"
                />
              </div>

              {/* কস্ট */}
              <div className="flex items-center justify-between rounded-xl bg-[#F3EFE4] px-4 py-3.5">
                <span className="text-sm font-medium text-gray-600">
                  Total cost
                </span>

                <span className="text-xl font-bold text-[#1E2E24]">
                  ${totalCost}
                </span>
              </div>

              {/* বাটন */}
              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-[#1E2E24] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
