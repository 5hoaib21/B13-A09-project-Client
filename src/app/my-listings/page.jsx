import { MyListingCard } from "@/components/ui/MyListingCard";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { CircleChevronLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { IoCreate } from "react-icons/io5";

export const metadata = {
  title: "My Listings | StudyNook",
};

const MyListingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myroom/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
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
      <div>
        {bookings.length === 0 && (
          <div className="h-[50vh] flex justify-center items-center flex-col gap-4">
            <h2 className="font-bold text-4xl text-[#ffb86a]">
              Do not have a room ?
            </h2>
            <Link href={"/add-room"}>
              <button
                className="flex items-center gap-3  relative cursor-pointer px-6 py-2 text-lg font-semibold text-[#c1a362] border-2 border-[#c1a362] rounded-[34px] bg-transparent overflow-hidden transition-all duration-300 ease-out-quint
  hover:text-[#212121] hover:scale-110 hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)]
  active:scale-100
  before:content-[''] before:absolute before:inset-0 before:m-auto before:w-12.5 before:h-12.5 before:rounded-[34px]
  before:bg-[#c1a362] before:scale-0 before:-z-10
  before:transition-all before:duration-700 before:ease-out-quint
  hover:before:scale-[3]"
              >
                <IoCreate />
                Create one
              </button>
            </Link>
          </div>
        )}
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
