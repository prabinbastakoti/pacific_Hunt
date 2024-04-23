const Pagination = ({ max }) => {
  return (
    <div className="mt-20 flex items-center justify-between mb-20">
      <div className="flex items-center justify-between gap-6">
        <img src="/arrowLeft.svg" alt="" />
        <div className="text-[#6B6D6F] leading-6 text-lg">Previous</div>
      </div>
      <div className="flex-1 flex items-center justify-center text-[#6B6D6F] leading-6 gap-4">
        <div className="bg-[#01A3E0] rounded py-4 px-6 text-white">1</div>
        <div className="py-4 px-6">2</div>
        <div className="py-4 px-6">3</div>
        <div className="py-4 px-6">4</div>
        <div className="py-4 px-6">&#x2022;&#x2022;&#x2022;</div>
        <div className="py-4 px-6">{max}</div>
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="text-[#6B6D6F] leading-6 text-lg">Next</div>
        <img src="/arrowRight.svg" alt="" />
      </div>
    </div>
  );
};

export default Pagination;
