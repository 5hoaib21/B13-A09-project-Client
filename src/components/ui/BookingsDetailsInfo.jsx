import { Button, Chip, Table } from "@heroui/react";
import Image from "next/image";
import { CancelBooking } from "./CancelBooking";

export function BookingsDetailsInfo({ bookings }) {
  // const isFuture =
  //   new Date(booking.date).setHours(0, 0, 0, 0) >=
  //   new Date().setHours(0, 0, 0, 0);
  // console.log(bookings, "hello ");
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-150">
          <Table.Header>
            <Table.Column isRowHeader>Room</Table.Column>
            <Table.Column>Date</Table.Column>
            <Table.Column>Time</Table.Column>
            <Table.Column>Cost</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {bookings?.length === 0 ? (
              <Table.Row>
                <Table.Cell>No booking found</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            ) : (
              bookings?.map((booking) => (
                <Table.Row key={booking?._id}>
                  <Table.Cell>{booking?.roomName}</Table.Cell>

                  <Table.Cell>
                    {new Date(booking?.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Table.Cell>

                  <Table.Cell>
                    {booking?.startTime} - {booking?.endTime}
                  </Table.Cell>

                  <Table.Cell>$ {booking?.totalCost}</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <Chip
                      color={
                        booking?.status === "cancelled" ? "danger" : "success"
                      }
                    >
                      {booking?.status || "confirmed"}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <CancelBooking bookingId={booking._id} />
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
