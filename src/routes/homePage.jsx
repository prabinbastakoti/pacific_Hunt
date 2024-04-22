import Navbar from "../component/Navbar";
import PopularCategories from "../component/Homepage/PopularCategories";
import TopOpenings from "../component/Homepage/TopOpenings";
import JoinCompanies from "../component/Homepage/JoinCompanies";
import CompaniesJobs from "../component/Homepage/Companies-Jobs";
import Testimonials from "../component/Homepage/Testimonials";
import JoinToday from "../component/JoinToday";
import Footer from "../component/Footer";

function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Navbar tab="Home" />
        <PopularCategories />
        <TopOpenings />
        <JoinCompanies />
        <CompaniesJobs />
        <Testimonials />
        <JoinToday />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
