import React from "react";
import AllStudyRooms from "./AllStudyRooms";
import { Button } from "@heroui/react";
import Link from "next/link";

const FeaturedStudyRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/room`);
  const rooms = await res.json();
  const featuredRooms = rooms.slice(0, 3);
  // console.log(featuredRooms , 'from featured sectt')
  return (
    <div className="my-10">
      <div className="flex justify-between items-center my-9">
        <div>
          <h1 className="text-4xl font-bold">Students` Most Loved</h1>
        </div>
        <div>
          <Link href={"/rooms"}>
            <button className="cursor-pointer flex items-center gap-2 rounded-lg bg-[#ffb86a] px-8 py-4 font-semibold text-[#492900] shadow-lg shadow-[#ffb86a]/10 transition hover:brightness-105">
              View all
              <span>→</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {featuredRooms.map((room) => (
          <AllStudyRooms room={room} key={room._id}>
            <h2>{room.room_name}</h2>
          </AllStudyRooms>
        ))}
      </div>
    </div>
  );
};

export default FeaturedStudyRooms;
