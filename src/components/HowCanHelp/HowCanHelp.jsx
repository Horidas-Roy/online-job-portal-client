import posting from '../../assets/images/posting.png'
import allType from '../../assets/images/alltype.svg'
import networking from '../../assets/images/networking.png'

const HowCanHelp = () => {
    return (
        <div className='text-center py-20'>
            <h2 className='text-4xl font-semibold'>How we can help</h2>
            <p className='text-2xl mt-2'>Making your job search easy</p>
            <div className='flex justify-evenly items-center text-start py-10 px-28 gap-5 '>
                <div>
                <img className='w-20 mb-5' src={posting} alt="" />
                <h2 className='text-2xl text-[#000]'>Free Job Posting</h2>
                <p>Post an unlimited number of your open vacancies absolutely for free</p>
                </div>
                <div>
                <img className='w-24 mb-5' src={allType} alt="" />
                <h2 className='text-2xl text-[#000]'>All Types Of Jobs</h2>
                <p>Post an unlimited number of your open vacancies absolutely for free</p>
                </div>
                <div>
                <img className='w-20 mb-5' src={networking} alt="" />
                <h2 className='text-2xl text-[#000]'>Power of Networking</h2>
                <p>Post an unlimited number of your open vacancies absolutely for free</p>
                </div>
            </div>
        </div>
    );
};

export default HowCanHelp;