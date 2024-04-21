import Navbar from "../component/Navbar";
import PopularCategories from "../component/Homepage/PopularCategories";
import TopOpenings from "../component/Homepage/TopOpenings";

function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Navbar tab="Home" />
        <PopularCategories />
        <TopOpenings />
      </div>
    </>
  );
}

export default HomePage;
