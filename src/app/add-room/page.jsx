"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const AddRoomPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

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

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/room`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
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
    <div className="relative overflow-hidden py-12 px-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div className="space-y-3 mb-8">
          <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-medium text-orange-500">
            StudyNook
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Add a New Room
          </h1>

          <p className="max-w-2xl text-sm md:text-base leading-7 text-zinc-500">
            Share your study room with others. You can edit or remove it any
            time.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-[32px] border border-orange-100 bg-white/80 backdrop-blur-xl p-5 sm:p-7 md:p-10 shadow-[0_20px_80px_rgba(255,190,120,0.15)] space-y-7"
        >
          {/* Room Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 text-sm md:text-base">
              Room Name
            </label>

            <input
              placeholder="room name"
              type="text"
              name="room_name"
              className="w-full h-12 px-4 rounded-2xl bg-white border border-orange-100 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition text-sm md:text-base text-gray-700"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 text-sm md:text-base">
              Description
            </label>

            <textarea
              name="description"
              rows="5"
              className="w-full p-4 rounded-2xl bg-white border border-orange-100 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition resize-none text-sm md:text-base text-gray-700"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 text-sm md:text-base">
              Image URL
            </label>

            <input
              name="imageUrl"
              type="text"
              placeholder="https://..."
              className="w-full h-12 px-4 rounded-2xl bg-white border border-orange-100 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition text-sm md:text-base text-gray-700"
            />
          </div>

          {/* Grid Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Floor */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 text-sm md:text-base">
                Floor
              </label>

              <input
                name="floor"
                type="text"
                placeholder="e.g. 3rd Floor"
                className="w-full h-12 px-4 rounded-2xl bg-white border border-orange-100 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition text-sm md:text-base text-gray-700"
              />
            </div>

            {/* Capacity */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 text-sm md:text-base">
                Capacity
              </label>

              <input
                name="capacity"
                type="number"
                defaultValue="2"
                className="w-full h-12 px-4 rounded-2xl bg-white border border-orange-100 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition text-sm md:text-base text-gray-700"
              />
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700 text-sm md:text-base">
                Hourly Rate ($)
              </label>

              <input
                name="rent"
                type="number"
                defaultValue="9"
                className="w-full h-12 px-4 rounded-2xl bg-white border border-orange-100 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition text-sm md:text-base text-gray-700"
              />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="block mb-4 font-semibold text-gray-700 text-sm md:text-base">
              Amenities
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-4 cursor-pointer transition-all duration-300 hover:border-orange-300 hover:shadow-md"
                >
                  <input
                    name="amenities"
                    value={item}
                    type="checkbox"
                    className="h-4 w-4 accent-orange-400"
                  />

                  <span className="text-sm md:text-base text-gray-700">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="cursor-pointer w-full sm:w-auto rounded-2xl bg-gradient-to-r from-orange-400 to-amber-300 px-8 py-4 text-sm md:text-base font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            Publish Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoomPage;
