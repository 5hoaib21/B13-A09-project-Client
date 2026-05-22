import { BookingsDetailsInfo } from "@/components/ui/BookingsDetailsInfo";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:8008/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
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
