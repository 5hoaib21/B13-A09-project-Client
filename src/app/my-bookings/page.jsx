import { BookingsDetailsInfo } from "@/components/ui/BookingsDetailsInfo";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { CircleChevronLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

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
  console.log(bookings, "data from booking list");

  // console.log(user, "user from booking list");
  return (
    <div className="w-10/12 mx-auto">
      <div className="space-y-2  flex flex-col justify-between my-10">
        <h2 className="text-4xl font-bold">My Booking</h2>
        <p className="text-sm text-zinc-400">
          Manage your upcoming and past room reservations.
        </p>
      </div>
      <div>
        {bookings.length === 0 && (
          <div className="h-[50vh] flex justify-center items-center flex-col gap-4">
            <h2 className="font-bold text-4xl text-purple-500">
              You have not booked the room yet.
            </h2>
            <Link href={"/rooms"}>
              <Button variant="outline">
                <CircleChevronLeft />
                to book Room
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div className="my-10 mb-70">
        <BookingsDetailsInfo
          bookings={bookings}
          key={bookings?._id}
        ></BookingsDetailsInfo>
      </div>
    </div>
  );
};

export default MyBookingsPage;
