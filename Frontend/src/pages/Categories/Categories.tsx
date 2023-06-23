import favorite from "../../assets/Favorite.svg";
import user from "../../assets/User.png";
import search from "../../assets/Search.svg";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <header className="flex justify-between items-center h-[30px] mt-6 bg-[var(--bg-dark)]">
        <h1 className="text-[22px] leading-8 font-medium text-[var(--highlight)]">
          Clocks
        </h1>
        <div className="flex items-center gap-5 icons">
          <img src={favorite} className="w-5 h-5 border wishlists"></img>
          <div className="profile h-[30px] w-[30px] rounded-full shadow shadow-[var(--highlight)] border">
            <img src={user} alt="user icon" />
          </div>
        </div>
      </header>

      <div className="search h-[55px] rounded-3xl mt-6 flex pl-4 items-center gap-5 bg-[var(--bg-lightDark)]">
        <img src={search} alt="search icon" className="w-[30px] h-[30px]" />
        <input
          type="text"
          placeholder="Search Products"
          className="w-full h-full bg-transparent outline-none text-white/90"
        />
      </div>

      <div className="contain flex flex-col gap-[23px] mt-[36px]">
        <Link to={`/search/luxury`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center luxury"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="font-extrabold capitalize text-xl">
              Luxury watches
            </h3>
          </div>
        </Link>
        <Link to={`/search/men`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center men"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="font-extrabold capitalize text-xl">
              trending for men
            </h3>
          </div>
        </Link>
        <Link to={`/search/women`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center women"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="font-extrabold capitalize text-xl">
              trending for women
            </h3>
          </div>
        </Link>
        <Link to={`/search/kids`}>
          <div
            className="h-[130px] border backdrop-blur-lg  bg-blend-multiply bg-black/75 rounded-[20px] flex bg-cover justify-center items-center kids"
            style={{ backgroundImage: 'url("src/images/clock8.jpg")' }}
          >
            <h3 className="font-extrabold capitalize text-xl">
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
