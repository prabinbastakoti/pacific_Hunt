import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';

const SingleOpening = ({ data }) => {
  return (
    // If id of current data is 6 then different border and shadow will be implemented
    <div
      className={`px-6 rounded-xl py-4 border-[1px] ${
        data.id === 6
          ? 'border-[#01A3E0] shadow-[#ACBCF540]'
          : 'border-[#E6E7E7]'
      }`}
    >
      <div className="flex justify-between">
        <img src={data.img} alt="" className="w-[48px] h-[48px] rounded-full" />
        <button className="text-sm xl:text-base text-[#01A3E0] rounded-[4px] border-[1px] px-3 xl:px-6 xl:py-3 border-[#01A3E0]">
          Apply Now
        </button>
      </div>
      <h1 className="font-semibold text-[#3C3D3D] mt-4">{data.title}</h1>
      <div className="flex items-center gap-4 mb-4 mt-[2px]">
        <div className="flex items-center justify-between gap-1">
          <IoLocationOutline />
          <div className="text-xs xl:text-[14px]">{data.address}</div>
        </div>
        <div className="flex items-center justify-between gap-1">
          <IoTimeOutline />
          <div className="text-xs xl:text-[14px]">
            Expires in {data.expires}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* map through array of details i.e. Remote work, entry level, full time , etc */}
        {data.details.map((item, index) => {
          return (
            <div key={item} className="flex items-center  gap-4">
              <div className="text-[#3C3D3D] text-sm xl:text-base">{item}</div>
              <div
                className={`${
                  index === 2 ? 'hidden' : 'flex-initial'
                } w-[6px] h-[6px] rounded-full bg-[#86888A]`}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="text-[#3C3D3D] text-sm xl:text-base">
        Salary: <span>{data.salary}</span>
      </div>
      <div className="w-full h-[2px] bg-[#E6E7E7] my-4 xl:my-8"></div>
      <div className="flex justify-between items-center">
        <div className="font-medium text-[#3C3D3D] text-sm xl:text-base">
          {data.corp}
        </div>
        {data.id === 3 || data.id === 4 ? (
          <img src="./bookmark-fill.svg" />
        ) : (
          <img src="./bookmark.svg" />
        )}
      </div>
    </div>
  );
};

export default SingleOpening;
