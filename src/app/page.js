import Banner from "@/components/home/Banner";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import Stats from "@/components/home/Stats";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import FeaturedStudyRooms from "@/components/page/FeaturedStudyRooms";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-10/12 mx-auto space-y-20">
      <Banner />
      <Stats />
      <FeaturedStudyRooms />
      <WhyChooseSection />
      <HowItWorksSection />
    </div>
  );
}
