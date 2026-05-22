"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { BookingModal } from "./BookingModal";
import Link from "next/link";

const BookRoomButton = ({ room, user }) => {
  // console.log(user, "user from btn");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      {user ? (
        <button
          onClick={() => setOpen(true)}
          className="mt-8 w-full bg-[#D9A441] text-black font-medium py-4 rounded-xl hover:opacity-90 transition flex justify-center items-center gap-2 cursor-pointer"
        >
          <Calendar size={18} />
          Book Now
        </button>
      ) : (
        <Link href={"/signin"}>
          <button
            onClick={() => setOpen(true)}
            className="mt-8 w-full bg-[#D9A441] text-black font-medium py-4 rounded-xl hover:opacity-90 transition flex justify-center items-center gap-2 cursor-pointer"
          >
            <Calendar size={18} />
            Login to Book
          </button>
        </Link>
      )}

      {/* Modal */}
      {open && <BookingModal room={room} setOpen={setOpen} />}
    </>
  );
};

export default BookRoomButton;
