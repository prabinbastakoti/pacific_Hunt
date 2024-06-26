import img1 from '../../assets/popular1.svg';
import img2 from '../../assets/popular2.svg';
import img3 from '../../assets/popular3.svg';
import img4 from '../../assets/popular4.svg';
import img5 from '../../assets/popular5.svg';
import img6 from '../../assets/popular6.svg';
import arrow from '../../assets/arrow.svg';

// dummy data of popular categories of jobs
const array = [
  { img: img1, title: 'Graphics & Design', description: '418 Open Position' },
  {
    img: img2,
    title: 'Coding & Programming',
    description: '240 Open Position',
  },
  { img: img3, title: 'Data Science', description: '120 Open position' },
  { img: img4, title: 'Health Care', description: '96 Open Position' },
  { img: img5, title: 'Digital Marketing', description: '60 Open Position' },
  { img: img6, title: 'Account & Finance', description: '185 Open Position' },
];

const popularCategories = () => {
  return (
    <div className="px-6 xl:px-0">
      <div className="xl:w-[1216px] flex justify-between mx-auto items-center mb-6">
        <h1 className="font-semibold  text-xl xl:text-2xl">
          Popular Categories
        </h1>
        <div className="flex items-center justify-between gap-2 rounded-[4px] border-[1px] px-3 py-2 xl:px-6 xl:py-4">
          <button className="text-sm xl:text-base font-medium text-center text-[#01A3E0]">
            See More
          </button>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:w-[1216px] mx-auto justify-between gap-4">
        {array.map((item, index) => {
          return (
            // setting border and text color based on index number
            <div
              key={index}
              className={`flex items-center gap-4 border-[1px] ${
                index === 2 ? 'border-[#01A3E0]' : 'border-[#E6E7E7]'
              } p-3 xl:p-6 rounded-xl`}
            >
              <div>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h1
                  className={`font-medium text-base xl:text-xl ${
                    index === 2 ? 'text-[#01A3E0]' : 'text-[#3C3D3D] '
                  }`}
                >
                  {item.title}
                </h1>
                <p className="text-xs xl:text-sm text-[#6B6d6F]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default popularCategories;
