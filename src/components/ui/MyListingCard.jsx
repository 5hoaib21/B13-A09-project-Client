import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import { DeleteAlert } from "./DeleteAlert";
import { EditRoomModal } from "./EditRoomModal";

export function MyListingCard({ booking }) {
  console.log(booking, "bookings");
  return (
    <Card className="w-full items-stretch md:flex-row mb-5">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <Image
          alt="Room Image"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={booking?.imageUrl}
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{booking?.room_name}</Card.Title>
          <Card.Description>{booking?.userId}</Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              {booking?.status}
            </span>
            <span className="text-xs text-muted">{booking?.userName}</span>
          </div>
          <div className="flex justify-end items-center gap-3">
            <EditRoomModal room={booking} id={booking?._id} />
            <DeleteAlert id={booking?._id} />
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
}
