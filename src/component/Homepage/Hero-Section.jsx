import SearchBar from "../SearchBar";
import HeroImg from "../../assets/hero.png";
import slack from "../../assets/heroSection1.svg";
import facebook from "../../assets/heroSection2.svg";
import google from "../../assets/heroSection3.svg";
import vacancies from "../../assets/heroSection4.svg";

const HeroSection = () => {
  return (
    <div className="bg-[#F5F6F6] pt-16 md:pt-20 relative px-6 md:px-0">
      <div className="md:w-[1216px] mx-auto">
        <div className="md:w-[54%] mb-20 md:mb-32">
          <div className="flex items-center gap-3">
            <img src="/checkbox.svg" alt="" />
            <div className="text-[#3C3D3D] font-medium">
              Your Trusted Career Partner
            </div>
          </div>
          <h1 className="text-[#3C3D3D] text-4xl md:text-5xl font-extrabold leading-[60px] mt-4">
            Unlock Your Dream <span className="text-[#01A3E0]">Career</span>
          </h1>
          <div className="md:absolute bottom-0 right-0 md:w-[900px] md:max-w-screen-lg">
            <img src={HeroImg} alt="" className="" />
            <img
              src={slack}
              alt=""
              className="absolute md:top-60 md:right-72 top-72 right-32 w-16 md:w-20"
            />
            <img
              src={facebook}
              alt=""
              className="absolute md:top-0 md:right-[72%] top-56 right-[72%] w-16 md:w-20"
            />
            <img
              src={google}
              alt=""
              className="absolute md:top-40 md:right-[78%] top-[310px] w-16 md:w-20"
            />
            <img
              src={vacancies}
              alt=""
              className="absolute md:top-14 md:right-72 top-52 right-32 w-16 md:w-20"
            />
          </div>
          <div className="mt-6 text-base md:text-lg text-[#4E4F50] w-[90%] mb-10 md:mb-16">
            Our platform is dedicated to empowering individuals, connecting
            talent with the right opportunities, and fostering professional
            growth.
          </div>
          <SearchBar />
          <div className="mt-6 text-[#3C3D3D] text-sm md:text-base">
            <span className="font-semibold">Popular Searches: </span>Designer,
            Developer, Programmer, Architect.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
