import SearchBar from '../SearchBar';
import HeroImg from '../../assets/hero.png';
import slack from '../../assets/heroSection1.svg';
import facebook from '../../assets/heroSection2.svg';
import google from '../../assets/heroSection3.svg';
import vacancies from '../../assets/heroSection4.svg';

const HeroSection = () => {
  return (
    <div className="max-w-[1980px] mx-auto w-full bg-[#F5F6F6] pt-16 xl:pt-20 relative px-6 xl:px-0">
      <div className="xl:w-[1216px] mx-auto">
        <div className="xl:w-[54%] mb-20 xl:mb-32">
          <div className="flex items-center gap-3">
            <img src="/checkbox.svg" alt="" />
            <div className="text-[#3C3D3D] font-medium">
              Your Trusted Career Partner
            </div>
          </div>
          <h1 className="text-[#3C3D3D] text-4xl xl:text-5xl font-extrabold leading-[60px] mt-4">
            Unlock Your Dream <span className="text-[#01A3E0]">Career</span>
          </h1>
          <div className="xl:absolute 2xl:bottom-0 2xl:right-0 xl:bottom-32 bottom-0 right-0 xl:right-0 xl:w-[600px] 2xl:w-[800px] 2xl:max-w-screen-xl">
            <img src={HeroImg} alt="" className="" />
            {/* positioning and sizing images in hero section for different screen sizes */}
            <img
              src={slack}
              alt=""
              className="absolute sm:w-16 lg:top-96 lg:right-80 lg:w-24 xl:top-32 xl:right-36 md:top-80 2xl:top-[200px] 2xl:right-[250px] top-72 right-28 w-14 md:w-20 2xl:w-24"
            />
            <img
              src={facebook}
              alt=""
              className="absolute sm:w-16 lg:w-24 xl:top-0 2xl:top-4 2xl:right-[72%] top-56 right-[72%] w-16 md:w-20 2xl:w-24"
            />
            <img
              src={google}
              alt=""
              className="absolute sm:w-16 lg:w-24 lg:top-96 xl:top-24 2xl:top-40 2xl:right-[78%] top-[300px] right-[82%] w-16 md:w-20 2xl:w-24"
            />
            <img
              src={vacancies}
              alt=""
              className="absolute sm:w-20 lg:w-28 lg:right-72 xl:top-0 xl:right-44 sm:top-[190px] sm:right-52 md:right-56 2xl:top-14 2xl:right-72 top-[220px] right-32 w-16 md:w-24 2xl:w-28"
            />
          </div>
          <div className="mt-6 text-base xl:text-xl text-[#4E4F50] w-[90%] mb-10 xl:mb-16">
            Our platform is dedicated to empowering individuals, connecting
            talent with the right opportunities, and fostering professional
            growth.
          </div>
          <SearchBar />
          <div className="mt-6 text-[#3C3D3D] text-sm xl:text-base">
            <span className="font-semibold">Popular Searches: </span>Designer,
            Developer, Programmer, Architect.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
