import image from "../assets/footer.png";
import footer1 from "../assets/footer1.svg";
import footer2 from "../assets/footer2.svg";
import footer3 from "../assets/footer3.svg";
import footer4 from "../assets/footer4.svg";

const array = [footer1, footer2, footer3, footer4];

const Footer = () => {
  return (
    <div className="bg-[#252527]">
      <div className="flex justify-between w-[1216px] mx-auto text-white py-16 border-b-[0.5px] border-[#9197AC]">
        <div className="w-[320px]">
          <img src={image} alt="" className="w-[189px] h-[40px] mb-6" />
          <div className="text-[#AFB0B1]">
            Lorem ipsum dolor sit amet consectetur. Nibh leo amet sed orci ipsum
            lectus pretium diam. Placerat ipsum volutpat commodo sodales.
          </div>
        </div>
        <div className="flex gap-20">
          <div>
            <h1 className="text-lg font-medium mb-4">Job Seekers</h1>
            <ul className="text-[#AFB0B1] flex flex-col gap-2">
              <li>Search Jobs</li>
              <li>Explore Jobs</li>
              <li>Saved Jobs</li>
              <li>Applied Jobs</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-medium mb-4">Employers</h1>
            <ul className="text-[#AFB0B1] flex flex-col gap-2">
              <li>Register</li>
              <li>Post Jobs</li>
              <li>Applications</li>
              <li>My Job Postings</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-medium mb-4">Legal</h1>
            <ul className="text-[#AFB0B1] flex flex-col gap-2">
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-12  w-[1216px] mx-auto flex items-center justify-between">
        <div className="text-[#D1D3DC] font-NotoSans">
          Copyright © 2024 Pacific Hunt. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          {array.map((item, index) => {
            return <img src={item} alt="" key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
