"use client";

import { useEffect, useRef, useState } from "react";
import {
  X,
  Wifi,
  Wind,
  MonitorPlay,
  PlugZap,
  VolumeX,
  Presentation,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export function EditRoom({ open, setOpen, room, id }) {
  const router = useRouter();
  const [selectedAmenities, setSelectedAmenities] = useState(
    room?.amenities || [],
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newRoomData = {
      ...Object.fromEntries(formData.entries()),
      amenities: selectedAmenities,
    };

    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/room/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(newRoomData),
      },
    );
    await res.json();
    if (res.ok) {
      setOpen(false);
      toast.success("Room Updated successfully");
      router.refresh();
    }
  };

  const modalRef = useRef(null);

  const amenities = [
    {
      name: "Whiteboard",
      icon: <Presentation size={18} />,
    },
    {
      name: "Projector",
      icon: <MonitorPlay size={18} />,
    },
    {
      name: "Wi-Fi",
      icon: <Wifi size={18} />,
    },
    {
      name: "Power Outlets",
      icon: <PlugZap size={18} />,
    },
    {
      name: "Quiet Zone",
      icon: <VolumeX size={18} />,
    },
    {
      name: "Air Conditioning",
      icon: <Wind size={18} />,
    },
  ];

  // toggle amenity
  const toggleAmenity = (item) => {
    setSelectedAmenities((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item],
    );
  };
  // outside click close
  useEffect(() => {
    const handleOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [setOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="flex min-h-screen items-center justify-center p-4 md:p-6">
        <div
          ref={modalRef}
          className="relative w-full max-w-5xl rounded-[32px] border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/50 shadow-[0_25px_80px_rgba(255,190,120,0.18)] backdrop-blur-xl"
        >
          {/* Glow */}
          <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-orange-200/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-amber-200/30 blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-h-[90vh] overflow-y-auto p-5 sm:p-7 md:p-10">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-white text-gray-500 shadow-sm transition hover:border-orange-300 hover:text-orange-500"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-8 space-y-3">
              <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-medium text-orange-500">
                Edit Study Room
              </span>

              <h2 className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-3xl md:text-5xl font-extrabold text-transparent">
                Update Room Details
              </h2>

              <p className="max-w-2xl text-sm md:text-base leading-7 text-gray-500">
                Modify your room information, amenities, and pricing anytime.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-7">
              {/* Room Name */}
              <div>
                <label className="mb-2 block text-sm md:text-base font-semibold text-gray-700">
                  Room Name
                </label>

                <input
                  defaultValue={room?.room_name}
                  placeholder="room name"
                  type="text"
                  name="room_name"
                  className="h-13 w-full rounded-2xl border border-orange-100 bg-white px-5 text-gray-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm md:text-base font-semibold text-gray-700">
                  Description
                </label>

                <textarea
                  defaultValue={room?.description}
                  name="description"
                  rows="5"
                  className="w-full resize-none rounded-2xl border border-orange-100 bg-white p-5 text-gray-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                ></textarea>
              </div>

              {/* Image URL */}
              <div>
                <label className="mb-2 block text-sm md:text-base font-semibold text-gray-700">
                  Image URL
                </label>

                <input
                  defaultValue={room?.imageUrl}
                  name="imageUrl"
                  type="text"
                  placeholder="https://..."
                  className="h-13 w-full rounded-2xl border border-orange-100 bg-white px-5 text-gray-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {/* Floor */}
                <div>
                  <label className="mb-2 block text-sm md:text-base font-semibold text-gray-700">
                    Floor
                  </label>

                  <input
                    defaultValue={room?.floor}
                    name="floor"
                    type="text"
                    placeholder="e.g. 3rd Floor"
                    className="h-13 w-full rounded-2xl border border-orange-100 bg-white px-5 text-gray-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                {/* Capacity */}
                <div>
                  <label className="mb-2 block text-sm md:text-base font-semibold text-gray-700">
                    Capacity
                  </label>

                  <input
                    defaultValue={room?.capacity}
                    name="capacity"
                    type="number"
                    className="h-13 w-full rounded-2xl border border-orange-100 bg-white px-5 text-gray-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                {/* Rent */}
                <div>
                  <label className="mb-2 block text-sm md:text-base font-semibold text-gray-700">
                    Hourly Rate ($)
                  </label>

                  <input
                    name="rent"
                    type="number"
                    defaultValue={room?.rent}
                    className="h-13 w-full rounded-2xl border border-orange-100 bg-white px-5 text-gray-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="mb-4 block text-sm md:text-base font-semibold text-gray-700">
                  Amenities
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {amenities.map((item, idx) => {
                    const active = selectedAmenities.includes(item.name);

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleAmenity(item.name)}
                        className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                      
                      ${
                        active
                          ? "border-orange-300 bg-gradient-to-r from-orange-50 to-amber-50 shadow-orange-100"
                          : "border-orange-100 bg-white"
                      }
                    `}
                      >
                        {/* Radio */}
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition
                        
                        ${
                          active
                            ? "border-orange-400 bg-orange-400"
                            : "border-gray-300"
                        }
                      `}
                        >
                          <div
                            className={`h-2 w-2 rounded-full bg-white transition
                          
                          ${active ? "scale-100" : "scale-0"}
                        `}
                          ></div>
                        </div>

                        {/* Icon */}
                        <div
                          className={`transition
                        
                        ${active ? "text-orange-500" : "text-gray-400"}
                      `}
                        >
                          {item.icon}
                        </div>

                        {/* Text */}
                        <span
                          className={`text-sm md:text-base font-medium transition
                        
                        ${active ? "text-orange-500" : "text-gray-700"}
                      `}
                        >
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex flex-col-reverse gap-3 border-t border-orange-100 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-12 rounded-2xl border border-orange-200 bg-white px-6 font-medium text-gray-600 transition hover:bg-orange-50 hover:text-orange-500"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="h-12 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-300 px-7 font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
