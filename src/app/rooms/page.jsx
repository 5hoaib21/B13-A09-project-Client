import AllStudyRooms from '@/components/page/AllStudyRooms';
import React from 'react';

const RoomsPage = async () => {
  const res = await fetch(`http://localhost:8008/room`)
  const rooms = await res.json()
  console.log(rooms)
  return (
    <div className='w-10/12 mx-auto'>
    <div className="space-y-2 mb-5">
        {" "}
        <h1 className="text-4xl font-bold">All Study Rooms</h1>
        <p className="text-sm text-zinc-400">
        Browse the full catalog. Filter by amenity, price, or search by name.
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {
          rooms.map(room => <AllStudyRooms room={room} key={room._id}>
            <h2>{room.room_name}</h2>
          </AllStudyRooms>)
        }
      </div>
      {/* <AllStudyRooms /> */}
    </div>
  );
};

export default RoomsPage;