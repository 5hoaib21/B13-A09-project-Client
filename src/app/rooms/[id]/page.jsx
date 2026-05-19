import React from "react";

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;


  const res = await fetch(`http://localhost:8008/room/${id}`)
  const roomDetails = await res.json()
  console.log(roomDetails);
  return (
    <div>
      <div>
        <h2> this is room detail page</h2>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
