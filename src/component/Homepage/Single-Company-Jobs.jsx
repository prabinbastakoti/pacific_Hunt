import { IoLocationOutline } from 'react-icons/io5';

const SingleCompanyJobs = ({ data }) => {
  return (
    <div className="px-6 rounded-xl py-4 border-[1px] border-[#E6E7E7]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <img src={data.img} alt="" />
        </div>
        <div className="text-xs md:text-base bg-[#EFFAFF] border-[1px] border-[#01A3E0] rounded-[30px] px-4 py-3 text-[#0072AA] text-center">
          {data.available} jobs available
        </div>
      </div>
      <h1 className="text-base md:text-lg font-semibold text-[#3C3D3D] mb-[2px]">
        {data.name}
      </h1>
      <div className="flex items-center gap-2 mb-4">
        <IoLocationOutline />
        <span className="text-xs md:text-sm text-[#6B6D6F]">
          {data.address}
        </span>
      </div>
      <div className="flex items-center mb-4 gap-3">
        {data.tabs.map((item) => {
          return (
            <div
              key={item}
              className="rounded-[30px] border-[1px] border-[#E6E7E7] px-3 py-2 md:px-4 md:py-3 md:text-base text-xs"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCompanyJobs;
