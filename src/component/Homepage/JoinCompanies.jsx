import google from "../../assets/googlelogo.svg";
import zoho from "../../assets/zoho.svg";
import airbnb from "../../assets/airbnb.svg";
import microsoft from "../../assets/microsoft.svg";
import clickup from "../../assets/clickup.svg";

const array = [google, zoho, airbnb, microsoft, clickup];

const JoinCompanies = () => {
  return (
    <>
      <div className="bg-[#F5F6F6] h-[300px] py-20">
        <div className="w-[1216px] h-full mx-auto flex flex-col justify-between items-center">
          <h1 className="font-semibold text-2xl">
            Join in globally <span className="text-[#01A3E0]">renowned</span>{" "}
            companies
          </h1>
          <div className="flex items-center justify-between gap-16">
            {array.map((item, index) => {
              return <img src={item} alt="" key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinCompanies;
