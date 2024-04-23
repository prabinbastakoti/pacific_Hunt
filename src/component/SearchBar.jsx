import { FiSearch } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="max-w-[1216px] p-2 bg-white mx-auto rounded-lg  border-[1px] border-[#E6E7E7] shadow=[#BECCFF26]">
      <form className="flex justify-between">
        <div className="flex-1 flex justify-between gap-4 px-3 py-5">
          <div className="flex-1 flex items-center gap-3 border-r-[1px] border-[#D0D1D1]">
            <FiSearch size={24} />
            <input
              type="text"
              placeholder="Job title, Keyword..."
              className="outline-none"
            />
          </div>
          <div className="flex-1 flex items-center gap-3">
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
          className="font-medium rounded px-5 bg-[#01A3E0] text-[#D6EBFB]"
        >
          Search Job
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
