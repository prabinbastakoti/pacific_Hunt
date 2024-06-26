import Navbar from '../component/Navbar';
import arrow from '../assets/arrow.svg';
import HeroSection from '../component/Homepage/Hero-Section';
import PopularCategories from '../component/Homepage/PopularCategories';
import TopOpenings from '../component/Homepage/TopOpenings';
import JoinCompanies from '../component/Homepage/JoinCompanies';
import CompaniesJobs from '../component/Homepage/Companies-Jobs';
import Testimonials from '../component/Homepage/Testimonials';
import JoinToday from '../component/JoinToday';
import Footer from '../component/Footer';

function Homepage() {
  return (
    <>
      {/* tab props helps to show border below the current tab based on its value */}
      <Navbar tab="Home" />
      <div className="flex flex-col gap-16 xl:gap-20">
        <HeroSection />
        <PopularCategories />
        <div className="px-6">
          <div className="xl:w-[1216px] flex justify-between mx-auto items-center mb-6">
            <h1 className="font-semibold text-xl xl:text-2xl">
              Top Job Openings
            </h1>
            <div className="flex items-center justify-between gap-2 rounded-[4px] border-[1px] px-3 py-2 xl:px-6 xl:py-4">
              <button className="font-medium text-sm xl:text-base text-center text-[#01A3E0]">
                See More
              </button>
              <img src={arrow} alt="" />
            </div>
          </div>
          <TopOpenings />
        </div>
        <JoinCompanies />
        <div>
          <div className="xl:w-[1216px] mx-auto px-6">
            <div className="flex justify-end mb-6">
              <div className="flex items-center justify-between gap-2 rounded-[4px] border-[1px] px-3 py-2  xl:px-6 xl:py-4">
                <button className="font-medium text-sm xl:text-base text-center text-[#01A3E0]">
                  See More
                </button>
                <img src={arrow} alt="" />
              </div>
            </div>
            <CompaniesJobs />
          </div>
        </div>
        <Testimonials />
        <JoinToday />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
