import img1 from "../../assets/topOpenings1.png";
import img2 from "../../assets/topOpenings2.png";
import img3 from "../../assets/topOpenings3.png";
import arrow from "../../assets/arrow.svg";
import SingleOpening from "./SingleOpening";

const array = [
  {
    img: img1,
    title: "Deep Learning Engineer",

    address: "Sydney, Australia",
    expires: "25 Days",
    details: ["Remote", "Entry Level", "Full Time"],
    salary: "50K - 80K AUD",
    corp: "Tesla Inc.",
  },
  {
    img: img2,
    title: "Game Developer",

    address: "Melbourne, Australia",
    expires: "25 Days",
    details: ["Onsite", "Intermediate", "Internship"],
    salary: "50K - 90K AUD",
    corp: "The Batman Corporation",
  },
  {
    img: img3,
    title: "AI Engineer",

    address: "Perth, Australia",
    expires: "25 Days",
    details: ["Hybrid", "Experienced", "Full Time"],
    salary: "20K - 50K AUD",
    corp: "Google",
  },
  {
    img: img2,
    title: "Software Engineer",

    address: "Melbourne, Australia",
    expires: "25 Days",
    details: ["Onsite", "Intermediate", "Internship"],
    salary: "50K - 90K AUD",
    corp: "The Batman Corporation",
  },
  {
    img: img3,
    title: "Data Scientist",

    address: "Perth, Australia",
    expires: "25 Days",
    details: ["Hybrid", "Experienced", "Full Time"],
    salary: "20K - 50 K AUD",
    corp: "Google",
  },
  {
    img: img1,
    title: "Product Designer",

    address: "Sydney, Australia",
    expires: "25 Days",
    details: ["Remote", "Entry Level", "Full Time"],
    salary: "50K - 80K AUD",
    corp: "Tesla Inc.",
  },
];

const TopOpenings = () => {
  return (
    <div>
      <div className="w-[1216px] flex justify-between mx-auto items-center mb-6">
        <h1 className="font-semibold text-2xl">Top Job Openings</h1>
        <div className="flex items-center justify-between gap-2 rounded-[4px] border-[1px] px-6 py-4">
          <button className="font-medium text-base text-center text-[#01A3E0]">
            See More
          </button>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 w-[1216px] h-[56px] mx-auto justify-between gap-6">
        {array.map((item, index) => {
          return <SingleOpening data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TopOpenings;
