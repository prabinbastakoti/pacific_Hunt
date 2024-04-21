import Navbar from "../component/Navbar";
import PopularCategories from "../component/Homepage/PopularCategories";
import TopOpenings from "../component/Homepage/TopOpenings";

const JobsPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Navbar tab="Jobs" />
      <PopularCategories />
      <TopOpenings />
    </div>
  );
};

export default JobsPage;
