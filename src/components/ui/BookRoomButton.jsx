"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { BookingModal } from "./BookingModal";

const BookRoomButton = ({room}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="mt-8 w-full bg-[#D9A441] text-black font-medium py-4 rounded-xl hover:opacity-90 transition flex justify-center items-center gap-2 cursor-pointer"
      >
        <Calendar size={18} />
        Book Now
      </button>

      {/* Modal */}
      {open && <BookingModal room={room} setOpen={setOpen} />}
    </>
  );
};

export default BookRoomButton;