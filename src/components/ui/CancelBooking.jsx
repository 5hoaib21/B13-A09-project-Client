"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function CancelBooking({ bookingId, bookingStatus }) {
  const router = useRouter();
  // console.log(bookingId);
  const handleBookingCancel = async () => {
    // if (bookingStatus !== "confirmed") return;
    const res = await fetch(
      `http://localhost:8008/booking/${bookingId}/cancel`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const data = await res.json();
    console.log(data, "from cancelled");
    if (data.modifiedCount > 0) {
      toast.success("Booking cancelled");
      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger-soft">Cancel</Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel this booking?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                You will lose your reserved time slot. The room will become
                available to others.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep booking
              </Button>
              <Button
                onClick={handleBookingCancel}
                slot="close"
                variant="danger"
              >
                Yes, cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
