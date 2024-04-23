import SearchBar from "../SearchBar";
import HeroImg from "../../assets/hero.png";
import slack from "../../assets/heroSection1.svg";
import facebook from "../../assets/heroSection2.svg";
import google from "../../assets/heroSection3.svg";
import vacancies from "../../assets/heroSection4.svg";

const HeroSection = () => {
  return (
    <div className="bg-[#F5F6F6] pt-20 relative">
      <div className="w-[1216px] mx-auto">
        <div className="w-[54%] mb-32">
          <div className="flex items-center gap-3">
            <img src="/checkbox.svg" alt="" />
            <div className="text-[#3C3D3D] font-medium">
              Your Trusted Career Partner
            </div>
          </div>
          <h1 className="text-[#3C3D3D] text-5xl font-extrabold leading-[60px] mt-4">
            Unlock Your Dream <span className="text-[#01A3E0]">Career</span>
          </h1>
          <div className="mt-6 text-lg text-[#4E4F50] w-[90%] mb-16">
            Our platform is dedicated to empowering individuals, connecting
            talent with the right opportunities, and fostering professional
            growth.
          </div>
          <SearchBar />
          <div className="mt-6 text-[#3C3D3D]">
            <span className="font-semibold">Popular Searches: </span>Designer,
            Developer, Programmer, Architect.
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[900px]">
        <img src={HeroImg} alt="" />
        <img src={slack} alt="" className="absolute top-60 right-72" />
        <img src={facebook} alt="" className="absolute top-0 right-[72%]" />
        <img src={google} alt="" className="absolute top-40 right-[78%]" />
        <img src={vacancies} alt="" className="absolute top-14 right-72" />
      </div>
    </div>
  );
};

export default HeroSection;
