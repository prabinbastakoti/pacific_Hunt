import google from '../../assets/googlelogo.svg';
import zoho from '../../assets/zoho.svg';
import airbnb from '../../assets/airbnb.svg';
import microsoft from '../../assets/microsoft.svg';
import clickup from '../../assets/clickup.svg';

// array of different companies logos
const array = [google, zoho, airbnb, microsoft, clickup];

const JoinCompanies = () => {
  return (
    <>
      <div className="bg-[#F5F6F6] xl:h-[300px] py-10 xl:py-20 max-w-[1980px] mx-auto w-full">
        <div className="xl:w-[1216px] h-full mx-auto flex flex-col justify-between items-center gap-6 xl:gap-0">
          <h1 className="font-semibold text-xl xl:text-2xl text-center">
            Join in globally <span className="text-[#01A3E0]">renowned</span>{' '}
            companies
          </h1>
          <div className="grid grid-cols-3 lg:flex items-center lg:justify-between gap-4 lg:gap-16">
            {array.map((item, index) => {
              return (
                <img
                  src={item}
                  alt=""
                  key={index}
                  className="w-20 lg:w-32 xl:w-44"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinCompanies;
