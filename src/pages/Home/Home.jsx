import Banner from "../../components/Banner/Banner";
import HowCanHelp from "../../components/HowCanHelp/HowCanHelp";
import CategoryTab from "../../components/category/CategoryTab";
import UploadCv from "../../components/extraSection/UploadCv";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Job Portal || Home </title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div className="text-center mt-10">
        <div className="md:text-start p-4">
          <h2 className="text-4xl font-semibold text-[#000]">
            Popular category
          </h2>
          <p className="text-2xl font-medium mt-2">
            2023 jobs live – 293 added today.
          </p>
        </div>
        <div className="mt-5">
          <CategoryTab></CategoryTab>
        </div>
      </div>
      <div>
        <UploadCv></UploadCv>
      </div>
      <div>
        <HowCanHelp></HowCanHelp>
      </div>
    </div>
  );
};

export default Home;
