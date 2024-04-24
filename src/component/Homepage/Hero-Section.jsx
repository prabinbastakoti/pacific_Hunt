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
        <div className="lg:w-[44%] xl:w-[54%] mb-20 xl:mb-32">
          <div className="flex items-center gap-3">
            <img src="/checkbox.svg" alt="" />
            <div className="text-[#3C3D3D] font-medium">
              Your Trusted Career Partner
            </div>
          </div>
          <h1 className="text-[#3C3D3D] text-4xl xl:text-5xl font-extrabold leading-[60px] mt-4">
            Unlock Your Dream <span className="text-[#01A3E0]">Career</span>
          </h1>
          <div className="lg:absolute 2xl:top-0 2xl:-right-20 xl:top-16 bottom-0 right-0 xl:-right-20 lg:top-24 lg:-right-20 md:w-[700px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] md:mx-auto">
            <img src={HeroImg} alt="" className="" />
            {/* positioning and sizing images in hero section for different screen sizes */}
            <img
              src={slack}
              alt=""
              className="absolute sm:w-16 md:right-60 md:top-72 lg:top-36 lg:right-44 lg:w-24 xl:top-32 xl:right-36 2xl:top-[200px] 2xl:right-[250px] top-72 right-28 w-14 md:w-20 2xl:w-24"
            />
            <img
              src={facebook}
              alt=""
              className="absolute sm:w-16 lg:left-20 md:top-40 md:left-40 lg:top-0 lg:w-24 xl:top-0 xl:left-32 2xl:top-4 2xl:right-[72%] top-56 right-[72%] w-16 md:w-20 2xl:w-24"
            />
            <img
              src={google}
              alt=""
              className="absolute sm:w-16 md:top-72 md:left-24 lg:w-24 lg:left-12 lg:top-36 xl:top-32 xl:left-24 2xl:top-40 2xl:right-[78%] top-[300px] right-[82%] w-16 md:w-20 2xl:w-24"
            />
            <img
              src={vacancies}
              alt=""
              className="absolute sm:w-20 md:top-40 lg:-top-2 lg:w-28 lg:right-52 xl:top-0 xl:right-44 sm:top-[190px] sm:right-52 md:right-64 2xl:top-14 2xl:right-72 top-[220px] right-32 w-16 md:w-24 2xl:w-28"
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
