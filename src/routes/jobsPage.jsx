import Navbar from '../component/Navbar';
import SearchBar from '../component/SearchBar';
import TopOpenings from '../component/Homepage/TopOpenings';
import JoinToday from '../component/JoinToday';
import Footer from '../component/Footer';
import Pagination from '../component/Pagination';

const array = [
  'Job Type',
  'Salary Range',
  'Category',
  'Experience Level',
  'Work Location',
];

const Jobspage = () => {
  return (
    <div className="">
      <Navbar tab="Jobs" />
      <div className="bg-[#F5F6F6] h-[96px] flex justify-center items-center mb-10">
        <div className="xl:w-[1216px] mx-auto font-semibold text-xl xl:text-[22px] leading-7">
          Find your dream <span className="text-[#01A3E0]">job</span>
        </div>
      </div>
      <SearchBar />
      <div className="xl:w-[1216px] mx-auto px-6 xl:px-0">
        <div className="mt-6 grid grid-cols-2 xl:flex items-center justify-between pb-10 border-b-[1px] border-[#D0D1D1]">
          {array.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center gap-4 xl:gap-[72px] border-[1px] border-[#E6E7E7] rounded py-4 px-[14px]"
              >
                <div className="text-xs xl:text-base">{item}</div>
                <img src="./downArrow.svg" alt="" />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 xl:flex-row xl:gap-0 items-center justify-between mt-8 pb-10 border-b-[1px] border-[#D0D1D1] mb-8">
          <div>
            <div className="text-[#6B6D6F] text-sm xl:text-base">
              Showing results for
            </div>
            <div className="text-base xl:text-xl font-semibold leading-6 text-[#3C3D3D] mt-2">
              All available jobs (112)
            </div>
          </div>
          <div className="flex items-center justify-between border-[1px] border-[#E6E7E7] py-1 xl:py-3">
            <div className="xl:border-r-[1px] border-[#D0D1D1] text-[#3C3D3D] font-semibold text-sm xl:text-base px-2 xl:px-4">
              Sort By:
            </div>
            <div className="flex items-center justify-between text-sm md:text-base md:px-6 md:gap-6">
              <div className="text-[#3C3D3D] leading-6">Most Relevant</div>
              <img src="./downArrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <TopOpenings />
          <TopOpenings />
        </div>
        <Pagination max="112" />
      </div>
      <div className="flex flex-col gap-10 md:gap-20">
        <JoinToday />
        <Footer />
      </div>
    </div>
  );
};

export default Jobspage;
