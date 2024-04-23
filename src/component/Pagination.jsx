const Pagination = ({ max }) => {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-between mb-20 gap-6 md:gap-0">
      <div className="flex items-center justify-between gap-3 md:gap-6">
        <img src="/arrowLeft.svg" alt="" />
        <div className="text-[#6B6D6F] leading-6 text-lg">Previous</div>
      </div>
      <div className="md:flex-1 flex items-center justify-center text-[#6B6D6F] leading-6 md:gap-4">
        <div className="bg-[#01A3E0] rounded py-2 px-4 md:py-4 md:px-6 text-white">
          1
        </div>
        <div className="py-2 px-4 md:py-4 md:px-6">2</div>
        <div className="py-2 px-4 md:py-4 md:px-6">3</div>
        <div className="py-2 px-4 md:py-4 md:px-6">4</div>
        <div className="py-2 px-4 md:py-4 md:px-6">
          &#x2022;&#x2022;&#x2022;
        </div>
        <div className="py-2 px-4 md:py-4 md:px-6">{max}</div>
      </div>
      <div className="flex items-center justify-between gap-3 md:gap-6">
        <div className="text-[#6B6D6F] leading-6 text-lg">Next</div>
        <img src="/arrowRight.svg" alt="" />
      </div>
    </div>
  );
};

export default Pagination;
