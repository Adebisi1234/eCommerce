import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Search from "../../components/SearchComp";
import Header from "../Home/Header";
import useWindowSize from "../../hooks/useWindowSize";

const Categories = () => {
  const width = useWindowSize();
  return (
    <>
      <Header />

      {width <= 640 && <Search />}

      <div className="contain flex flex-col gap-[23px] mt-[36px]">
        <Link to={`/search/luxury`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center luxury"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="text-xl font-extrabold capitalize">
              Luxury watches
            </h3>
          </div>
        </Link>
        <Link to={`/search/men`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center men"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="text-xl font-extrabold capitalize">
              trending for men
            </h3>
          </div>
        </Link>
        <Link to={`/search/women`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center women"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="text-xl font-extrabold capitalize">
              trending for women
            </h3>
          </div>
        </Link>
        <Link to={`/search/budget`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center budget"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="text-xl font-extrabold capitalize">
              Budget-friendly
            </h3>
          </div>
        </Link>
        <Link to="/">
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center all"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="text-xl font-extrabold capitalize">All Clocks</h3>
          </div>
        </Link>
        <Link to={`/search/kids`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center kids"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="text-xl font-extrabold capitalize">
              trending for kids
            </h3>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
