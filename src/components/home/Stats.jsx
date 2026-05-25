"use client";
import { useEffect, useState } from "react";

const Stats = () => {
  const [rooms, setRooms] = useState(0);
  const [hours, setHours] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let r = 0;
    let h = 0;
    let rt = 0;

    const interval = setInterval(() => {
      if (r < 120) r += 2;
      if (h < 8000) h += 150;
      if (rt < 4.9) rt += 0.1;

      setRooms(r);
      setHours(h);
      setRating(rt.toFixed(1));

      if (r >= 120 && h >= 8000 && rt >= 4.9) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="w-11/12 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">
          Trusted by Students Nationwide
        </h2>
        <p className="text-gray-500 mt-3">
          Join thousands of learners who rely on our platform for focused study
          sessions.
        </p>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-orange-400">{rooms}+</h3>
            <p className="text-gray-500 mt-2">Rooms Listed</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-orange-400">
              {(hours / 1000).toFixed(1)}K+
            </h3>
            <p className="text-gray-500 mt-2">Hours Booked</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-orange-400">{rating}★</h3>
            <p className="text-gray-500 mt-2">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
