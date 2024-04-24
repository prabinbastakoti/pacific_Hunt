import { FiSearch } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';

const SearchBar = () => {
  return (
    <div className="max-w-[1216px] p-3 xl:p-2 bg-white mx-auto rounded-xl  border-[1px] border-[#E6E7E7] shadow=[#BECCFF26]">
      <form className="xl:flex xl:justify-between grid grid-cols-1">
        <div className="flex-1 xl:flex justify-between gap-4 px-3 py-3 xl:py-5">
          <div className="flex-1 flex items-center gap-3 border-b-[1px] xl:border-b-[0px] xl:border-r-[1px] border-[#D0D1D1] py-3 xl:py-0">
            <FiSearch size={24} />
            <input
              type="text"
              placeholder="Job title, Keyword..."
              className="outline-none"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 xl:border-r-[1px] border-[#D0D1D1] py-3 xl:py-0 mb-2 xl:mb-0">
            <CiLocationOn size={24} />
            <input
              type="text"
              placeholder="Enter location"
              className="outline-none"
            />
          </div>
        </div>
        <button
          type="button"
          className="font-medium rounded xl:px-5 bg-[#01A3E0] text-[#D6EBFB] w-1/2 xl:w-max mx-auto py-3"
        >
          Search Job
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
