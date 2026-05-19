"use client";

import { useState } from "react";

import { EditRoom } from "./EditRoom";
import { Button } from "@heroui/react";
import { Pencil } from "lucide-react";

export function EditRoomModal({ room, id }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10">
      {/* Open Button */}
      <Button
        onClick={() => setOpen(true)}
        className={"text-sm font-bold bg-zinc-500"}
        variant=""
      >
        <Pencil /> Edit
      </Button>

      {/* Modal */}
      <EditRoom id={id} room={room} open={open} setOpen={setOpen} />
    </div>
  );
}
