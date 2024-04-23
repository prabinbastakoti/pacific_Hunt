import img1 from '../../assets/topOpenings1.png';
import img2 from '../../assets/topOpenings2.png';
import img3 from '../../assets/topOpenings3.png';
import SingleOpening from '../SingleOpening';

// sample data of TopOpenings
const array = [
  {
    id: 1,
    img: img1,
    title: 'Deep Learning Engineer',

    address: 'Sydney, Australia',
    expires: '25 Days',
    details: ['Remote', 'Entry Level', 'Full Time'],
    salary: '50K - 80K AUD',
    corp: 'Tesla Inc.',
  },
  {
    id: 2,
    img: img2,
    title: 'Game Developer',

    address: 'Melbourne, Australia',
    expires: '25 Days',
    details: ['Onsite', 'Intermediate', 'Internship'],
    salary: '50K - 90K AUD',
    corp: 'The Batman Corporation',
  },
  {
    id: 3,
    img: img3,
    title: 'AI Engineer',

    address: 'Perth, Australia',
    expires: '25 Days',
    details: ['Hybrid', 'Experienced', 'Full Time'],
    salary: '20K - 50K AUD',
    corp: 'Google',
  },
  {
    id: 4,
    img: img2,
    title: 'Software Engineer',

    address: 'Melbourne, Australia',
    expires: '25 Days',
    details: ['Onsite', 'Intermediate', 'Internship'],
    salary: '50K - 90K AUD',
    corp: 'The Batman Corporation',
  },
  {
    id: 5,
    img: img3,
    title: 'Data Scientist',

    address: 'Perth, Australia',
    expires: '25 Days',
    details: ['Hybrid', 'Experienced', 'Full Time'],
    salary: '20K - 50 K AUD',
    corp: 'Google',
  },
  {
    id: 6,
    img: img1,
    title: 'Product Designer',

    address: 'Sydney, Australia',
    expires: '25 Days',
    details: ['Remote', 'Entry Level', 'Full Time'],
    salary: '50K - 80K AUD',
    corp: 'Tesla Inc.',
  },
];

const TopOpenings = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:w-[1216px] mx-auto justify-between gap-6">
        {array.map((item) => {
          return <SingleOpening data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default TopOpenings;
