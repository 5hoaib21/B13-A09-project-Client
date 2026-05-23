import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import { DeleteAlert } from "./DeleteAlert";
import { EditRoomModal } from "./EditRoomModal";

export function MyListingCard({ booking }) {
  return (
    <Card className="mb-6 w-full rounded-[28px] border border-orange-100 bg-white shadow-[0_10px_40px_rgba(255,190,120,0.12)] transition-shadow duration-300 hover:shadow-[0_18px_60px_rgba(255,190,120,0.18)] md:flex-row">
      {/* Image */}
      <div className="relative h-60 w-full shrink-0 md:h-auto md:w-72">
        <Image
          alt="Room Image"
          className="absolute inset-0 h-full w-full rounded-t-[28px] object-cover md:rounded-l-[28px] md:rounded-tr-none"
          loading="lazy"
          src={booking?.imageUrl}
          width={400}
          height={400}
        />

        {/* Overlay */}
        <div className="absolute inset-0 rounded-t-[28px] bg-gradient-to-t from-black/40 via-black/10 to-transparent md:rounded-l-[28px] md:rounded-tr-none"></div>

        {/* Status */}
        <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-xs font-semibold text-orange-500 shadow-md">
          {booking?.status}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold text-gray-800">
              {booking?.room_name}
            </h2>

            <p className="text-sm text-gray-500">
              Hosted by{" "}
              <span className="font-medium text-orange-500">
                {booking?.userName}
              </span>
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-orange-100"></div>

          {/* Info */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-500">
              User ID: {booking?.userId}
            </div>

            <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-500">
              Active Room
            </div>
          </div>
        </div>

        {/* Footer */}
        <Card.Footer className="mt-8 flex flex-col gap-4 border-t border-orange-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            Manage your room information anytime.
          </p>

          {/* Actions */}
          <div className="relative z-50 flex items-center gap-3">
            <EditRoomModal room={booking} id={booking?._id} />

            <DeleteAlert id={booking?._id} />
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
}
