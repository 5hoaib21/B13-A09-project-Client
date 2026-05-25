import { BookingsDetailsInfo } from "@/components/ui/BookingsDetailsInfo";
import { auth } from "@/lib/auth";
import { CircleChevronLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "My Bookings | StudyNook",
};

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const bookings = await res.json();
  // console.log(bookings, "data from booking list");

  // console.log(user, "user from booking list");
  return (
    <div className="w-10/12 mx-auto">
      <div className="space-y-2  flex flex-col justify-between my-10">
        <h2 className="text-4xl font-bold">My Booking</h2>
        <p className="text-sm text-zinc-400">
          Manage your upcoming and past room reservations.
        </p>
      </div>
      <div className="my-10 mb-70">
        {bookings.length === 0 ? (
          <div className="h-[50vh] flex justify-center items-center flex-col gap-4">
            <h2 className="font-bold text-4xl text-[#ffb86a]">
              You have not booked the room yet.
            </h2>
            <Link href={"/rooms"}>
              <button
                className="flex items-center gap-3  relative cursor-pointer px-6 py-2 text-lg font-semibold text-[#c1a362] border-2 border-[#c1a362] rounded-[34px] bg-transparent overflow-hidden transition-all duration-300 ease-out-quint
  hover:text-[#212121] hover:scale-110 hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)]
  active:scale-100
  before:content-[''] before:absolute before:inset-0 before:m-auto before:w-12.5 before:h-12.5 before:rounded-[34px]
  before:bg-[#c1a362] before:scale-0 before:-z-10
  before:transition-all before:duration-700 before:ease-out-quint
  hover:before:scale-[3]"
              >
                <CircleChevronLeft />
                to book
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <BookingsDetailsInfo
              bookings={bookings}
              key={bookings?._id}
            ></BookingsDetailsInfo>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;
