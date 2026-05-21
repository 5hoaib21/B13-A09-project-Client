import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllStudyRooms = ({ room }) => {
  // console.log(room.amenities, 'room amini');
  return (
    <div>
      <div className="h-full rounded-3xl overflow-hidden border border-[#96cebf] bg-white text-black shadow-xl group hover:-translate-y-1 transition duration-300 flex flex-col">
        {/* Image */}
        <div className="overflow-hidden">
          <Image
            src={room?.imageUrl}
            alt={room?.room_name}
            width={500}
            height={500}
            className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 flex flex-col flex-1 justify-between">
          {/* Title + Price */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-[#000000] line-clamp-1">
                {room?.room_name}
              </h2>
            </div>

            <div className="shrink-0 px-3 py-1 rounded-full   text-black text-sm font-semibold">
              ${room?.rent}/hr
            </div>
          </div>

          {/* Description */}
          <p className="text-[#000000] text-sm leading-relaxed line-clamp-2">
            {room?.description}
          </p>

          {/* Info */}
          <div className="flex flex-wrap items-center gap-4 text-[#000000] text-sm">
            <div className="flex items-center gap-1">
              <span>🏢</span>
              <span>{room?.floor}</span>
            </div>

            <div className="flex items-center gap-1">
              <span>👥</span>
              <span>{room?.capacity} people</span>
            </div>

            {/* <div className="flex items-center gap-1">
              <span>📚</span>
              <span>21 bookings</span>
            </div> */}
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2">
            {Array.isArray(room?.amenities) &&
              room?.amenities.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-[#dca85550] text-black text-xs font-medium"
                >
                  {item}
                </span>
              ))}
          </div>

          {/* Button */}
          <div className="">

          <Link href={`/rooms/${room._id}`}>
            <button className="w-full mt-2 border border-[#1f3a331d] hover:border-[#d8a23c] bg-[#d8dddc86] hover:text-white hover:bg-[#0b1d18] text-black py-3 rounded-2xl font-semibold transition cursor-pointer">
              View Details
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudyRooms;
