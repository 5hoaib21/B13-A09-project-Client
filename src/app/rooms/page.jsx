import AllRoomPage from "@/components/page/AllRoomPage";

export const metadata = {
  title: "Rooms | StudyNook",
};

const RoomsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/room`, {
    cache: "no-store",
  });

  const rooms = await res.json();

  return <AllRoomPage initialRooms={rooms} />;
};

export default RoomsPage;
