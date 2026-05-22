"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";

export function DeleteAlert({ id }) {
  const router = useRouter();
  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`http://localhost:8008/room/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });

    const data = await res.json();
    if (data.deletedCount > 0) {
      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger-soft">Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete this Room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Footer>
              <Button slot="close" variant="secondary">
                Deny
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
