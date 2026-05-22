"use client";

import { authClient } from "@/lib/auth-client";
import { CloudDownload } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddRoomPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newRoomData = {
      room_name: formData.get("room_name"),
      description: formData.get("description"),
      imageUrl: formData.get("imageUrl"),
      floor: formData.get("floor"),
      capacity: formData.get("capacity"),
      rent: formData.get("rent"),
      userImage: user?.image,
      userId: user?.id,
      userName: user?.name,

      // multiple checkbox values
      amenities: formData.getAll("amenities"),
    };

    console.log(newRoomData, "formData");

    const res = await fetch("http://localhost:8008/room", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRoomData),
    });

    const data = await res.json();
    // router.refresh();
    toast.success("Room Added Successfully");
    redirect("/rooms");
    // console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="space-y-2 mb-5">
        {" "}
        <h1 className="text-4xl font-bold">Add a New Room</h1>
        <p className="text-sm text-zinc-400">
          Share your study room with others. You can edit or remove it any time.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-5xl rounded-[28px] border border-[#1f3a33] bg-[#071411] p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-2xl space-y-6"
      >
        {/* Room Name */}
        <div>
          <label className="block mb-2 font-semibold text-sm md:text-base">
            Room Name
          </label>

          <input
            placeholder="room name"
            type="text"
            name="room_name"
            className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition text-sm md:text-base"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold text-sm md:text-base">
            Description
          </label>

          <textarea
            name="description"
            rows="5"
            className="w-full p-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition resize-none text-sm md:text-base"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-semibold text-sm md:text-base">
            Image URL
          </label>

          <input
            name="imageUrl"
            type="text"
            placeholder="https://..."
            className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition text-sm md:text-base"
          />
        </div>

        {/* Grid Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Floor */}
          <div>
            <label className="block mb-2 font-semibold text-sm md:text-base">
              Floor
            </label>

            <input
              name="floor"
              type="text"
              placeholder="e.g. 3rd Floor"
              className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition text-sm md:text-base"
            />
          </div>

          {/* Capacity */}
          <div>
            <label className="block mb-2 font-semibold text-sm md:text-base">
              Capacity
            </label>

            <input
              name="capacity"
              type="number"
              defaultValue="2"
              className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition text-sm md:text-base"
            />
          </div>

          {/* Hourly Rate */}
          <div>
            <label className="block mb-2 font-semibold text-sm md:text-base">
              Hourly Rate ($)
            </label>

            <input
              name="rent"
              type="number"
              defaultValue="9"
              className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition text-sm md:text-base"
            />
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className="block mb-4 font-semibold text-sm md:text-base">
            Amenities
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Whiteboard",
              "Projector",
              "Wi-Fi",
              "Power Outlets",
              "Quiet Zone",
              "Air Conditioning",
            ].map((item, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#1f3a33] bg-[#071411] cursor-pointer hover:border-[#d8a23c] transition"
              >
                <input
                  name="amenities"
                  value={item}
                  type="checkbox"
                  className="w-4 h-4 accent-[#d8a23c]"
                />

                <span className="text-sm md:text-base">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="cursor-pointer w-full sm:w-auto px-6 py-3 rounded-xl bg-[#d8a23c] text-black font-semibold hover:opacity-90 transition text-sm md:text-base"
        >
          Publish Room
        </button>
      </form>
    </div>
  );
};

export default AddRoomPage;
