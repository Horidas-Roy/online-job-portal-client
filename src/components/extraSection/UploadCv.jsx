import bannerh1 from "../../assets/images/banner-home-01.svg";
import bannerh2 from "../../assets/images/banner-home-02.svg";

const UploadCv = () => {
  return (
    <div className="flex justify-evenly items-center gap-10 px-12 py-10">
      <div className="flex justify-center items-center bg-[#fde7de] p-10 rounded-xl">
        <div>
          <h2 className="text-3xl font-semibold my-3">For Employers</h2>
          <p className="text-lg mb-7">Find professionals from around the world and across all skills.</p>
          <button className="btn text-white rounded-full px-8 bg-[#007456] hover:bg-[rgb(21,148,114)]">Post jobs for Free</button>
        </div>
        <div>
          <img src={bannerh1} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#fde7de] p-10 rounded-xl">
        <div>
          <h2 className="text-3xl font-semibold my-3">For Candidate</h2>
          <p className="text-lg mb-7">Build your professional profile, find new job opportunities.</p>
          <button className="btn text-white rounded-full px-8 bg-[#007456] hover:bg-[rgb(21,148,114)]">Upload your CV</button>
        </div>
        <div>
          <img src={bannerh2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UploadCv;
