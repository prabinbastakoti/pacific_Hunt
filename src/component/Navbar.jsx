import logo from "../assets/homepage.png";
import { Link } from "react-router-dom";

const tabs = ["Home", "Jobs", "Companies", "About us"];

const Navbar = ({ tab }) => {
  return (
    <div className="w-[1440px] h-[80px] flex justify-between items-center mx-auto">
      <div>
        <img src={logo} alt="" className="w-[188px] h-[39.69px]" />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          {tabs.map((item) => {
            return (
              <div
                key={item}
                className={`ml-8 ${
                  tab === item.trim() ? "text-[#01A3E0]" : "text-black"
                }`}
              >
                <Link to={`/${item.trim()}`}>{item}</Link>
                <div
                  className={`w-1/2 h-[2px] ${
                    tab === item.trim() ? "bg-[#01A3E0]" : "bg-none"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-6">
          <button className="bg-[#01A3E0] text-white px-6 py-[14px] rounded-[4px]">
            Sign Up
          </button>
          <button className="rounded-[4px] border-[1px] px-6 py-[14px] text-[#01A3E0] ">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
