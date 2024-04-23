import image from '../assets/footer.png';
import footer1 from '../assets/footer1.svg';
import footer2 from '../assets/footer2.svg';
import footer3 from '../assets/footer3.svg';
import footer4 from '../assets/footer4.svg';

const array = [footer1, footer2, footer3, footer4];

const Footer = () => {
  return (
    <div className="bg-[#252527] px-10 xl:px-0 max-w-[1980px] mx-auto w-full">
      <div className="xl:flex justify-between xl:w-[1216px] mx-auto text-white py-16 border-b-[0.5px] border-[#9197AC]">
        <div className="w-[320px] mb-4 xl:mb-0">
          <img
            src={image}
            alt=""
            className="w-[150px] xl:w-[189px] xl:h-[40px] mb-6"
          />
          <div className="text-[#AFB0B1] text-sm xl:text-base">
            Lorem ipsum dolor sit amet consectetur. Nibh leo amet sed orci ipsum
            lectus pretium diam. Placerat ipsum volutpat commodo sodales.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:flex gap-10 xl:gap-20">
          <div>
            <h1 className="text-base xl:text-xl font-medium mb-2 xl:mb-4">
              Job Seekers
            </h1>
            <ul className="text-sm xl:text-base text-[#AFB0B1] flex flex-col gap-2">
              <li>Search Jobs</li>
              <li>Explore Jobs</li>
              <li>Saved Jobs</li>
              <li>Applied Jobs</li>
            </ul>
          </div>
          <div>
            <h1 className="text-base xl:text-xl font-medium mb-2 xl:mb-4">
              Employers
            </h1>
            <ul className="text-sm xl:text-base text-[#AFB0B1] flex flex-col gap-2">
              <li>Register</li>
              <li>Post Jobs</li>
              <li>Applications</li>
              <li>My Job Postings</li>
            </ul>
          </div>
          <div>
            <h1 className="text-base xl:text-xl font-medium mb-2 xl:mb-4">
              Legal
            </h1>
            <ul className="text-sm xl:text-base text-[#AFB0B1] flex flex-col gap-2">
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-12 xl:w-[1216px] mx-auto flex items-center justify-between gap-4 xl:gap-0">
        <div className="text-xs xl:text-base text-[#D1D3DC] font-NotoSans">
          Copyright © 2024 Pacific Hunt. All rights reserved.
        </div>
        <div className="flex items-center gap-3 xl:gap-6">
          {array.map((item, index) => {
            return <img src={item} alt="" key={index} className="w-4 xl:w-6" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
