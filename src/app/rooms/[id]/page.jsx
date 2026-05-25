import Image from "next/image";
import { Users, Layers3, DollarSign } from "lucide-react";
import Link from "next/link";

import { EditRoomModal } from "@/components/ui/EditRoomModal";
import { DeleteAlert } from "@/components/ui/DeleteAlert";
import BookRoomButton from "@/components/ui/BookRoomButton";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { Chip } from "@heroui/react";

export const metadata = {
  title: "Room Details | StudyNook",
};

const RoomDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const { id } = await params;

  // const { token } = await auth.api.getToken({
  //   headers: await headers(),
  // });
  // console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/room/${id}`);
  // console.log(res, "res from detail page");
  const room = await res.json();
  // console.log(room, "room");
  return (
    <div>
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
          {/* Back */}
          <Link href={"/rooms"}>
            {" "}
            <button className="mb-8 flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-white transition">
              ← Back
            </button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT */}
            <div className="lg:col-span-2">
              {/* Cover */}
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={room?.imageUrl}
                  alt={room?.room_name}
                  width={1400}
                  height={800}
                  className="w-full h-130 object-cover shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="mt-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h1 className="text-5xl font-serif font-bold">
                    {room?.room_name}
                  </h1>

                  <div className=" text-green-400 border border-green-300 shadow-xl px-4 py-2 rounded-full text-sm">
                    {room?.bookings} bookings
                  </div>
                </div>

                <p className="mt-2 text-gray-400">Listed {room.listedDate}</p>

                <p className="mt-8 text-lg text-gray-400 leading-relaxed">
                  {room?.description}
                </p>

                {/* Amenities */}
                <div className="mt-10">
                  <h3 className="text-2xl font-serif font-semibold mb-5">
                    Amenities
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {Array.isArray(room?.amenities) &&
                      room?.amenities.map((item) => (
                        <Chip
                          color="warning"
                          key={item}
                          className="px-4 py-2 rounded-full  border border-white/10 text-sm"
                        >
                          {item}
                        </Chip>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="room-y-6">
              {/* Booking Card */}
              <div className="sticky top-6 rounded-3xl border border-white/10 bg-white p-7">
                <div className="flex justify-between items-start">
                  <h2 className="text-5xl font-bold text-[#D9A441]">
                    ${room.rent}
                  </h2>

                  <span className="text-gray-400">per hour</span>
                </div>

                <div className="mt-8 room-y-4 text-gray-700">
                  <div className="flex items-center gap-3">
                    <Layers3 size={18} />
                    <span>{room.floor}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users size={18} />
                    <span>Up to {room?.capacity} person</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <DollarSign size={18} />
                    <span>{room?._id?.length} total bookings</span>
                  </div>
                </div>

                {/* <button className="mt-8 w-full bg-[#D9A441] text-black font-medium py-4 rounded-xl hover:opacity-90 transition flex justify-center items-center gap-2">
                  <Calendar size={18} />
                  Book Now
                </button> */}
                <BookRoomButton user={user} room={room} />
                {/* <div className=" flex  items-center">
                  <EditRoomModal room={room} id={room?._id} />
                  <DeleteAlert room={room} id={room?._id} />
                </div> */}
              </div>

              {/* Host Card */}
              <div className="shadow-xl rounded-3xl border border-black/10 bg-[#ffffff] p-6 mt-5">
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-5">
                  Listed By
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={user?.image}
                    alt={room?.room_name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">{user?.name}</h4>

                    <p className="text-sm text-gray-400">maya@studynook.demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
