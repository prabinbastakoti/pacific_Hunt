import { FiSearch } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const CompanySearchBar = () => {
  return (
    <div className="max-w-[1216px] p-3 md:p-2 bg-white mx-auto rounded-lg  border-[1px] border-[#E6E7E7] shadow=[#BECCFF26]">
      <form className="md:flex justify-between grid grid-cols-1">
        <div className="flex-1 md:flex justify-between gap-4 px-3 py-3 md:py-5">
          <div className="flex-1 flex items-center gap-3 md:border-r-[1px] border-b-[1px] md:border-b-[0px] border-[#D0D1D1] py-3 md:py-0">
            <FiSearch size={24} />
            <input
              type="text"
              placeholder="Company name"
              className="outline-none"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-[#D0D1D1]  py-3 md:py-0">
            <CiLocationOn size={24} />
            <input
              type="text"
              placeholder="Enter location"
              className="outline-none"
            />
          </div>
          <div className="flex-1 flex items-center justify-between pr-4 text-[#86888A] py-3 md:py-0 pl-9 md:pl-0">
            <div>Industry type</div>
            <img src="/downArrow.svg" alt="" />
          </div>
        </div>
        <button
          type="button"
          className="font-medium rounded md:px-5 bg-[#01A3E0] text-[#D6EBFB] w-1/2 md:w-max mx-auto py-3"
        >
          Search Companies
        </button>
      </form>
    </div>
  );
};
export default CompanySearchBar;
