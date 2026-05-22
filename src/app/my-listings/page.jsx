import { MyListingCard } from "@/components/ui/MyListingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyListingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`http://localhost:8008/myroom/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookings = await res.json();
  console.log(bookings, "session from my listing page");

  return (
    <div className="w-10/12 mx-auto my-1.5">
      <div className="space-y-2  flex flex-col justify-between my-10">
        <h2 className="text-4xl font-bold">My Listings</h2>
        <p className="text-sm text-zinc-400">
          Rooms you currently host on StudyNook.
        </p>
      </div>
      <div className="mb-5">
        {bookings.map((booking) => (
          <MyListingCard booking={booking} key={booking?._id}></MyListingCard>
        ))}
      </div>
    </div>
  );
};

export default MyListingPage;
