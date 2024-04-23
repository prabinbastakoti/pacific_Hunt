import arrow from '../../assets/arrow.svg';
import google from '../../assets/google.svg';
import slack from '../../assets/slack.svg';
import skype from '../../assets/skype.svg';
import facebook from '../../assets/facebook.svg';
import apple from '../../assets/apple.svg';
import twitter from '../../assets/twitter.svg';
import SingleCompanyJobs from './Single-Company-Jobs.jsx';

// dummy data of different companies with number of jobs available
const array = [
  {
    img: google,
    available: '50',
    name: 'Google',
    address: 'Perth, Australia',
    tabs: ['Information Technology', 'Fintech'],
  },
  {
    img: slack,
    available: '222',
    name: 'Prabodh Digital Production',
    address: 'Perth, Australia',
    tabs: ['Information Technology', 'Fintech'],
  },
  {
    img: skype,
    available: '115',
    name: 'Skype',
    address: 'Perth, Australia',
    tabs: ['Information Technology', 'Fintech'],
  },
  {
    img: facebook,
    available: '97',
    name: 'Facebook',
    address: 'Perth, Australia',
    tabs: ['Information Technology', 'Fintech'],
  },
  {
    img: apple,
    available: '130',
    name: 'Apple',
    address: 'Perth, Australia',
    tabs: ['Information Technology', 'Fintech'],
  },
  {
    img: twitter,
    available: '80',
    name: 'Twitter',
    address: 'Perth, Australia',
    tabs: ['Information Technology', 'Fintech'],
  },
];

const CompaniesJobs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between gap-6">
      {array.map((item, index) => {
        return <SingleCompanyJobs data={item} key={index} />;
      })}
    </div>
  );
};

export default CompaniesJobs;
