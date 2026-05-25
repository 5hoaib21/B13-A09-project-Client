"use client";

import AllStudyRooms from "@/components/page/AllStudyRooms";
import { useEffect, useState } from "react";

const AllRoomPage = ({ initialRooms }) => {
  const [search, setSearch] = useState("");
  const [amenity, setAmenity] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState(initialRooms);

  useEffect(() => {
    const controller = new AbortController();

    const loadRooms = async () => {
      const params = new URLSearchParams();

      if (search.trim()) {
        params.set("search", search.trim());
      }

      if (amenity) {
        params.set("amenity", amenity);
      }

      if (price === "low") {
        params.set("minRent", "0");
        params.set("maxRent", "10");
      }

      if (price === "mid") {
        params.set("minRent", "10");
        params.set("maxRent", "25");
      }

      if (price === "high") {
        params.set("minRent", "25");
      }

      const query = params.toString();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/room${query ? `?${query}` : ""}`,
        {
          cache: "no-store",
          signal: controller.signal,
        },
      );

      const data = await res.json();
      setRooms(data);
    };

    loadRooms().catch((error) => {
      if (error.name !== "AbortError") {
        setRooms(initialRooms);
      }
    });

    return () => controller.abort();
  }, [search, amenity, price, initialRooms]);

  return (
    <div className="w-10/12 mx-auto">
      {/* Heading */}
      <div className="space-y-2 flex flex-col justify-between my-10">
        <h1 className="text-4xl font-bold">All Study Rooms</h1>
        <p className="text-sm text-zinc-400">
          Browse the full catalog. Filter by amenity, price, or search by name.
        </p>
      </div>

      {/* 🔍 SEARCH + FILTER SECTION */}
      <div className="mb-10 rounded-2xl border border-orange-100 bg-white/80 p-5 backdrop-blur-xl shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {/* Search */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by room name..."
            className="h-12 w-full rounded-xl border border-orange-100 bg-orange-50/40 px-4 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
          />

          {/* Amenity */}
          <select
            value={amenity}
            onChange={(e) => setAmenity(e.target.value)}
            className="h-12 w-full rounded-xl border border-orange-100 bg-orange-50/40 px-4 outline-none focus:border-orange-300"
          >
            <option value="">All Amenities</option>
            <option value="Wi-Fi">Wi-Fi</option>
            <option value="Projector">Projector</option>
            <option value="Whiteboard">Whiteboard</option>
            <option value="Air Conditioning">Air Conditioning</option>
          </select>

          {/* Price */}
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="h-12 w-full rounded-xl border border-orange-100 bg-orange-50/40 px-4 outline-none focus:border-orange-300"
          >
            <option value="">All Prices</option>
            <option value="low">0 - 10</option>
            <option value="mid">10 - 25</option>
            <option value="high">25+</option>
          </select>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-10">
        {rooms.map((room) => (
          <AllStudyRooms room={room} key={room._id} />
        ))}
      </div>
    </div>
  );
};

export default AllRoomPage;
