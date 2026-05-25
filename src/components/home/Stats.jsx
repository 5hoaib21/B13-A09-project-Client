import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
          <h2 className="text-4xl font-bold text-orange-400">120+</h2>
          <p className="text-gray-500 mt-2">Rooms Listed</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
          <h2 className="text-4xl font-bold text-orange-400">8K+</h2>
          <p className="text-gray-500 mt-2">Hours Booked</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
          <h2 className="text-4xl font-bold text-orange-400">4.9★</h2>
          <p className="text-gray-500 mt-2">Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
