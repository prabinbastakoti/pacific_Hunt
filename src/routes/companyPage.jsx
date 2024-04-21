import Navbar from "../component/Navbar";
import PopularCategories from "../component/Homepage/PopularCategories";
import TopOpenings from "../component/Homepage/TopOpenings";

const CompanyPage = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Navbar tab="Companies" />
        <PopularCategories />
        <TopOpenings />
      </div>
    </>
  );
};

export default CompanyPage;
