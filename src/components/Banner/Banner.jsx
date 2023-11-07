import { AiOutlineSearch } from "react-icons/ai";
import banner from "../../assets/images/banner.png";
import tip1 from '../../assets/images/tip-1-1.png';
import tip2 from '../../assets/images/tip-2.png';

const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-20 bg-[#ecf2f0]">
      <div>
        <h2 className="text-5xl text-[#000] font-bold">
          Got Talent ?<br></br> Meet Opportunity
        </h2>
        <p className="text-2xl py-4">
          Company reviews. Salaries. Interviews. Jobs.
        </p>
        <div className="flex justify-center items-center bg-[#FFF] px-3 py-3 rounded-full gap-3 text-2xl">
          <AiOutlineSearch></AiOutlineSearch>
          <input
            onClick={() => setSelect(true)}
            type="search"
            name=""
            id=""
            className="px-3 py-2 outline-none"
            placeholder="Search here"
          />
          <button className="bg-[#007456] text-[#FFF] text-xl font-medium px-4 py-2 rounded-full">
            Search
          </button>
        </div>
        <p className="text-xl py-5">
          <h2><span className="text-[#555555]">Popular Searches:</span> Customer Support, Web Design</h2>
        </p>
      </div>
      <div className="relative">
        <img className="" src={banner} alt="" />
        <img className="w-60  absolute bottom-20 right-2" src={tip1} alt="" />
        <img className="w-64 absolute top-80" src={tip2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
