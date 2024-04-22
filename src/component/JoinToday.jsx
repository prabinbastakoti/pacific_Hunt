import image from "../assets/joinToday.png";

const JoinToday = () => {
  return (
    <div className="w-[1216px] mx-auto pt-24 pb-12">
      <div className="bg-[#04334D]  rounded-xl px-14 py-20 relative">
        <div className="text-white w-[54%]">
          <h1 className="font-semibold text-2xl leading-8 mb-8">
            Join <span className="text-[#01A3E0]">Pacific Hunt </span> today.
            Connect, Grow, Succeed.
          </h1>
          <p className="mb-12">
            Whether you're seeking your next career move or searching for top
            talent, our platform offers the perfect avenue to connect and
            thrive.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-[#01A3E0] px-6 py-[14px] rounded font-medium">
              Join as jobseeker
            </button>
            <button className="border-[1px] border-[#2DC9FF] rounded px-6 py-[14px] text-[#2DC9FF] font-medium">
              Join as employer
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-10">
          <img src={image} alt="" className="w-[820px]" />
        </div>
      </div>
    </div>
  );
};

export default JoinToday;
