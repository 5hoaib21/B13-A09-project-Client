"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Pencil } from "lucide-react";

export function EditRoom() {
  const onSubmit = async (e) => {
e.preventDefault()
const formData = new FormData(e.currentTarget)
const newRoomData = Object.fromEntries(formData.entries())

// const res = await fetch('http://localhost:8008/room', {
//   method: "POST",
//   headers: {
//     'content-type': "application/json"
//   },
//   body: JSON.stringify(newRoomData)
// })
// const data = await res.json()
// console.log(data);


}

  return (
    <Modal>
      <Button className={"text-sm font-bold"} variant="">
                        {" "}
                        <Pencil />
                        Edit
                      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={onSubmit}
                  className="w-full max-w-5xl rounded-[28px] border border-[#1f3a33] p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-2xl space-y-6"
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
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
