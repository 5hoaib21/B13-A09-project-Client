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
  ImagePlus,
} from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

export function EditRoom({ open, setOpen,  room, id }) {

const onSubmit = async (e) => {
e.preventDefault()
const formData = new FormData(e.currentTarget)
const newRoomData = Object.fromEntries(formData.entries())
// console.log(newRoomData,' new room data');

const res = await fetch(`http://localhost:8008/room/${id}`, {
  method: "PATCH",
  headers: {
    'content-type': "application/json"
  },
  body: JSON.stringify(newRoomData)
})
const data = await res.json()
  redirect('/rooms')



}






  const modalRef = useRef(null);

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [preview, setPreview] = useState(null);

  // amenities
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
    if (selectedAmenities.includes(item)) {
      setSelectedAmenities(
        selectedAmenities.filter((a) => a !== item)
      );
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  // outside click close
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutside
      );
    };
  }, [setOpen]);

  // esc close
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

  // image preview
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-300">
      
      {/* modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl rounded-[28px] border border-[#1f3a33] bg-[#071411] p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-2xl space-y-6 animate-in zoom-in-95 duration-300 max-h-[95vh] overflow-y-auto"
      >
        {/* close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 text-zinc-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        {/* header */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Edit Room
          </h2>

          <p className="text-zinc-400 mt-2 text-sm md:text-base">
            Update your room information
          </p>
        </div>

        {/* form */}
        <form
          onSubmit={onSubmit}
          className="space-y-6"
        >
          {/* Room Name */}
          <div>
            <label className="block mb-2 font-semibold text-sm md:text-base">
              Room Name
            </label>

            <input
            defaultValue={room?.room_name}
              placeholder="room name"
              type="text"
              name="room_name"
              className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-sm md:text-base">
              Description
            </label>

            <textarea
            defaultValue={room?.description}
              name="description"
              rows="5"
              className="w-full p-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition resize-none"
            ></textarea>
          </div>

          {/* image upload preview */}
  <div>
          <label className="block mb-2 font-semibold text-sm md:text-base">
            Image URL
          </label>

          <input
          defaultValue={room?.imageUrl}
           name="imageUrl"
            type="text"
            placeholder="https://..."
            className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition text-sm md:text-base"
          />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Floor */}
          <div>
            <label className="block mb-2 font-semibold text-sm md:text-base">
              Floor
            </label>

            <input
            defaultValue={room?.floor}
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
            defaultValue={room?.capacity}
            name="capacity"
              type="number"
              
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
              defaultValue={room?.rent}
              className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition text-sm md:text-base"
            />
          </div>
        </div>

          {/* amenities */}
          <div>
            <label className="block mb-4 font-semibold text-sm md:text-base">
              Amenities
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"   >

              {amenities.map((item, idx) => {
                const active =
                  selectedAmenities.includes(item.name);

                return (
                  <button
                
                 name="amenities" 
                    key={idx}
                    type=""
                    onClick={() =>
                      toggleAmenity(item.name)
                    }
                    className={`group relative overflow-hidden flex items-center gap-3 px-4 py-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]
                    
                    ${
                      active
                        ? "border-[#d8a23c] bg-[#d8a23c]/10 shadow-[0_0_20px_rgba(216,162,60,0.15)]"
                        : "border-[#1f3a33] bg-[#071411]"
                    }
                    `}
                  >
                    {/* glow */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-[#d8a23c]/5 to-transparent`}
                    ></div>

                    {/* fake checkbox */}
                    <div
                      className={`relative flex items-center justify-center w-5 h-5 rounded-full border transition
                      
                      ${
                        active
                          ? "border-[#d8a23c] bg-[#d8a23c]"
                          : "border-zinc-500"
                      }
                      `}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-black transition ${
                          active ? "scale-100" : "scale-0"
                        }`}
                      ></div>
                    </div>

                    {/* icon */}
                    <div
                      className={`transition ${
                        active
                          ? "text-[#d8a23c]"
                          : "text-zinc-400"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* text */}
                    <span
                      className={`relative text-sm md:text-base font-medium transition
                      
                      ${
                        active
                          ? "text-[#f6d28b]"
                          : "text-zinc-300"
                      }
                      `}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-12 px-6 rounded-xl border border-[#1f3a33] hover:border-[#d8a23c] transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-12 px-7 rounded-xl bg-[#d8a23c] text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}