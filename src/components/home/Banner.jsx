import { CiPlay1 } from "react-icons/ci";
import BannerImage from "../../../public/assets/banner.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className=" grid  grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-32">
        {/* HERO CONTENT */}
        <div className="flex flex-col gap-8">
          {/* BADGE */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border shadow-xl border-[#434843]/20  px-4 py-1.5">
            <span className="text-[18px] text-[#ffb86a]">✦</span>

            <span className="text-sm text-[#000000]">
              Quiet rooms, on demand
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-xl font-serif text-5xl leading-tight text-[#d2e8d7] md:text-7xl">
            Find Your Perfect{" "}
            <span className="italic text-[#ffb86a]">Study Room</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="max-w-md text-lg leading-8 text-[#c3c8c1]">
            Browse and book quiet, private study rooms in your library by the
            hour. List your own room and earn — without the scheduling
            headaches.
          </p>

          {/* BUTTONS */}
          <div className="mt-2 flex flex-wrap gap-4">
            <Link href={"/rooms"}>
              {/* <button className="flex items-center gap-2 rounded-lg bg-[#ffb86a] px-8 py-4 font-semibold text-[#492900] shadow-lg shadow-[#ffb86a]/10 transition hover:brightness-105">
              Explore Rooms
              <span>→</span>
            </button> */}
              <button
                className="relative cursor-pointer px-6 py-2 text-lg font-semibold text-[#c1a362] border-2 border-[#c1a362] rounded-[34px] bg-transparent overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] 
  hover:text-[#212121] hover:scale-110 hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)]
  active:scale-100
  before:content-[''] before:absolute before:inset-0 before:m-auto before:w-[50px] before:h-[50px] before:rounded-[34px]
  before:bg-[#c1a362] before:scale-0 before:-z-10
  before:transition-all before:duration-700 before:ease-[cubic-bezier(0.23,1,0.32,1)]
  hover:before:scale-[3]"
              >
                Explore More
              </button>
            </Link>
          </div>

          {/* STATS */}
        </div>

        {/* HERO IMAGE */}
        <div className="relative">
          {/* BLUR EFFECT */}
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#ffb86a]/10 blur-[100px]" />

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl border border-[#434843]/10 shadow-2xl">
            <Image
              src={BannerImage}
              alt="Library"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="mt-10 grid grid-cols-3 gap-20 border-t border-[#434843]/10 pt-10">
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-[#d2e8d7]">120+</span>

          <span className="text-sm text-[#c3c8c1]">Rooms listed</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-[#d2e8d7]">8K</span>

          <span className="text-sm text-[#c3c8c1]">Hours booked</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-[#d2e8d7]">4.9★</span>

          <span className="text-sm text-[#c3c8c1]">Avg. rating</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
