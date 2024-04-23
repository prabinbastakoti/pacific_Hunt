import img1 from '../../assets/testimonial1.svg';
import img2 from '../../assets/testimonial2.svg';
import img3 from '../../assets/testimonial3.svg';
import quote from '../../assets/quote.svg';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';

const array = [
  {
    id: 1,
    message:
      "This job portal has been instrumental in advancing my career. The  interface is intuitive, making it easy to navigate through job listings  and application processes. I've received numerous interview requests and job offers through this portal. I highly recommend it to anyone seeking new  career opportunities.",
    img: img1,
    name: 'Amanda Bell',
    position: 'Product Designer',
  },
  {
    id: 2,
    message:
      "This job portal has been instrumental in advancing my career. The  interface is intuitive, making it easy to navigate through job listings  and application processes. I've received numerous interview requests and job offers through this portal. I highly recommend it to anyone seeking new  career opportunities.",
    img: img2,
    name: 'Robert Smith',
    position: 'HR Manager',
  },
  {
    id: 3,
    message:
      "This job portal has been instrumental in advancing my career. The  interface is intuitive, making it easy to navigate through job listings  and application processes. I've received numerous interview requests and job offers through this portal. I highly recommend it to anyone seeking new  career opportunities.",
    img: img3,
    name: 'Kevin Hall',
    position: 'Business Administrator',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#F5F6F6] xl:h-[592px] py-16 px-10 xl:pl-[300px] mx-auto">
      <div className="xl:w-[980px] 2xl:w-[1216px] flex items-center justify-between mb-14 px-2 xl:px-0">
        <h1 className="font-semibold text-xl xl:text-2xl leading-8">
          What our client say about{' '}
          <span className="text-[#01A3E0]">Pacific Hunt</span>
        </h1>
        <div className="flex items-center gap-1 xl:gap-4">
          <img src={arrowLeft} alt="" className="w-8 xl:w-20" />
          <div className="text-sm xl:text-[22px] font-medium text-[#3C3D3D]">
            <span className="text-[#01A3E0]">2</span>/14
          </div>
          <img src={arrowRight} alt="" className="w-8 xl:w-20" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:inline-flex gap-12">
        {array.map((item) => {
          return (
            <div
              key={item.id}
              className="xl:w-[592px] xl:h-[360px] rounded-xl px-6 xl:px-8 py-10 bg-[#FFFFFF]"
            >
              <img src={quote} alt="" className="mb-4 xl:mb-8" />
              <p className="italic text-[#3C3D3D] text-sm xl:text-base">
                {item.message}
              </p>
              <div className="flex items-center mt-10 gap-4 ">
                <img src={item.img} alt="" />
                <div>
                  <h1 className="text-[#3C3D3D] text-base xl:text-[18px] font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-[#86888A] text-xs xl:text-sm">
                    {item.position}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
