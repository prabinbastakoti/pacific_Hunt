import google from "../../assets/googlelogo.svg";
import zoho from "../../assets/zoho.svg";
import airbnb from "../../assets/airbnb.svg";
import microsoft from "../../assets/microsoft.svg";
import clickup from "../../assets/clickup.svg";

const array = [google, zoho, airbnb, microsoft, clickup];

const JoinCompanies = () => {
  return (
    <>
      <div className="bg-[#F5F6F6] md:h-[300px] py-10 md:py-20">
        <div className="md:w-[1216px] h-full mx-auto flex flex-col justify-between items-center gap-6 md:gap-0">
          <h1 className="font-semibold text-xl md:text-2xl text-center">
            Join in globally <span className="text-[#01A3E0]">renowned</span>{" "}
            companies
          </h1>
          <div className="grid grid-cols-3 md:flex items-center md:justify-between gap-4 md:gap-16">
            {array.map((item, index) => {
              return (
                <img src={item} alt="" key={index} className="w-16 md:w-44" />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinCompanies;
