import React from "react";

const HowItWorksSection = () => {
  return (
    <div>
      <section className="py-16 mb-30 bg-orange-50 rounded-2xl">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-500 mt-2">
            Booking your perfect study room is quick and simple.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="p-6 bg-white hover:shadow-lg transition rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-orange-400">1</div>
              <h3 className="font-semibold mt-2">Browse Rooms</h3>
              <p className="text-gray-500 text-sm mt-1">
                Explore available study rooms based on your needs.
              </p>
            </div>

            <div className="p-6 bg-white hover:shadow-lg transition rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-orange-400">2</div>
              <h3 className="font-semibold mt-2">Select Time</h3>
              <p className="text-gray-500 text-sm mt-1">
                Choose your preferred date and time slot.
              </p>
            </div>

            <div className="p-6 bg-white hover:shadow-lg transition rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-orange-400">3</div>
              <h3 className="font-semibold mt-2">Confirm Booking</h3>
              <p className="text-gray-500 text-sm mt-1">
                Complete your booking in just a few clicks.
              </p>
            </div>

            <div className="p-6 bg-white hover:shadow-lg transition rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-orange-400">4</div>
              <h3 className="font-semibold mt-2">Start Studying</h3>
              <p className="text-gray-500 text-sm mt-1">
                Enjoy a peaceful and productive study session.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksSection;
