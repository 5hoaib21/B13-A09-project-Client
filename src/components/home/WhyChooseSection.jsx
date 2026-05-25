import React from "react";

const WhyChooseSection = () => {
  return (
    <div className="">
      <section className="py-16 mt-20  bg-orange-50 rounded-2xl">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose StudyNook?
          </h2>
          <p className="text-gray-500 mt-2">
            We provide the best environment for focused and productive study
            sessions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="p-6 bg-white shadow-sm rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-400">
                Quiet Environment
              </h3>
              <p className="text-gray-500 mt-2">
                Enjoy distraction-free study spaces designed for deep focus.
              </p>
            </div>

            <div className="p-6 bg-white shadow-sm rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-400">
                High-Speed WiFi
              </h3>
              <p className="text-gray-500 mt-2">
                Stay connected with fast and reliable internet access.
              </p>
            </div>

            <div className="p-6 bg-white shadow-sm rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-400">
                Comfortable Setup
              </h3>
              <p className="text-gray-500 mt-2">
                Ergonomic chairs and desks for long study hours.
              </p>
            </div>

            <div className="p-6 bg-white shadow-sm rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-400">
                Flexible Booking
              </h3>
              <p className="text-gray-500 mt-2">
                Book rooms easily based on your preferred time slots.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseSection;
