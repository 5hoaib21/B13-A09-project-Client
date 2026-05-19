import {
  Select,
  FieldError,
  Input,
  Label,
  TextField,
  ListBox,
  Button,
  TextArea,
} from "@heroui/react";

const AddRoomPage = () => {
  return (
    <div>
      <h1>Add a New Room</h1>
      <p>
        Share your study room with others. You can edit or remove it any time.
      </p>
      <form className="max-w-4xl mx-auto p-8 rounded-3xl border border-[#1f3a33] bg-[#071411] text-white shadow-2xl space-y-6">
        {/* Room Name */}
        <div>
          <label className="block mb-2 font-semibold text-sm">Room Name</label>

          <input
            type="text"
            placeholder=""
            className="w-full h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold text-sm">
            Description
          </label>

          <textarea
            rows="5"
            className="w-full p-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition resize-none"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-semibold text-sm">Image URL</label>

          <input
            type="text"
            placeholder="https://..."
            className="w-full h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition"
          />
        </div>

        {/* Grid Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Floor */}
          <div>
            <label className="block mb-2 font-semibold text-sm">Floor</label>

            <input
              type="text"
              placeholder="e.g. 3rd Floor"
              className="w-full h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition"
            />
          </div>

          {/* Capacity */}
          <div>
            <label className="block mb-2 font-semibold text-sm">Capacity</label>

            <input
              type="number"
              defaultValue="2"
              className="w-full h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition"
            />
          </div>

          {/* Hourly Rate */}
          <div>
            <label className="block mb-2 font-semibold text-sm">
              Hourly Rate ($)
            </label>

            <input
              type="number"
              defaultValue="9"
              className="w-full h-12 px-4 rounded-xl bg-[#02100d] border border-[#1f3a33] outline-none focus:border-[#d8a23c] transition"
            />
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className="block mb-4 font-semibold text-sm">Amenities</label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                <input type="checkbox" className="w-4 h-4 accent-[#d8a23c]" />

                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-[#d8a23c] text-black font-semibold hover:opacity-90 transition"
        >
          Publish Room
        </button>
      </form>
    
    </div>
  );
};

export default AddRoomPage;
