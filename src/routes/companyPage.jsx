import CompanySearchBar from "../component/CompanySearchBar";
import Navbar from "../component/Navbar";
import CompaniesJobs from "../component/Homepage/Companies-Jobs.jsx";
import Pagination from "../component/Pagination";
import JoinToday from "../component/JoinToday";
import Footer from "../component/Footer";

const CompanyPage = () => {
  return (
    <>
      <div className="">
        <Navbar tab="Companies" />
        <div className="bg-[#F5F6F6] h-[96px] px-28 py-[34px] mb-10">
          <div className="w-[1216px] mx-auto font-semibold text-[22px] leading-7">
            Explore the <span className="text-[#01A3E0]">best</span> companies
          </div>
        </div>
        <CompanySearchBar />
        <div className="w-[1216px] mx-auto">
          <div className="flex items-center justify-between mt-8 pb-10 border-b-[1px] border-[#D0D1D1] mb-8">
            <div>
              <div className="text-[#6B6D6F]">Showing results for</div>
              <div className="text-lg font-semibold leading-6 text-[#3C3D3D] mt-2">
                All companies (4512)
              </div>
            </div>
            <div className="flex items-center justify-between border-[1px] border-[#E6E7E7] py-3">
              <div className="border-r-[1px] border-[#D0D1D1] text-[#3C3D3D] font-semibold px-4">
                Sort By:
              </div>
              <div className="flex items-center justify-between px-6 gap-6">
                <div className="text-[#3C3D3D] leading-6">Most Jobs</div>
                <img src="/downArrow.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <CompaniesJobs />
            <CompaniesJobs />
          </div>
          <Pagination max="4512" />
        </div>
        <JoinToday />
        <Footer />
      </div>
    </>
  );
};

export default CompanyPage;
