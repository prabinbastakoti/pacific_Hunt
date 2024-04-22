import arrow from "../../assets/arrow.svg";
import google from "../../assets/google.svg";
import slack from "../../assets/slack.svg";
import skype from "../../assets/skype.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import twitter from "../../assets/twitter.svg";
import SingleCompanyJobs from "./Single-Company-Jobs.jsx";

const array = [
  {
    img: google,
    available: "50",
    name: "Google",
    address: "Perth, Australia",
    tabs: ["Information Technology", "Fintech"],
  },
  {
    img: slack,
    available: "222",
    name: "Prabodh Digital Production",
    address: "Perth, Australia",
    tabs: ["Information Technology", "Fintech"],
  },
  {
    img: skype,
    available: "115",
    name: "Skype",
    address: "Perth, Australia",
    tabs: ["Information Technology", "Fintech"],
  },
  {
    img: facebook,
    available: "97",
    name: "Facebook",
    address: "Perth, Australia",
    tabs: ["Information Technology", "Fintech"],
  },
  {
    img: apple,
    available: "130",
    name: "Apple",
    address: "Perth, Australia",
    tabs: ["Information Technology", "Fintech"],
  },
  {
    img: twitter,
    available: "80",
    name: "Twitter",
    address: "Perth, Australia",
    tabs: ["Information Technology", "Fintech"],
  },
];

const CompaniesJobs = () => {
  return (
    <div className="w-[1216px] mx-auto">
      <div className="flex justify-end mb-6">
        <div className="flex items-center justify-between gap-2 rounded-[4px] border-[1px] px-6 py-4">
          <button className="font-medium text-base text-center text-[#01A3E0]">
            See More
          </button>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between gap-6">
        {array.map((item, index) => {
          return <SingleCompanyJobs data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CompaniesJobs;
