import { Link } from 'react-router-dom';
import pic404 from '../../assets/images/404.jpg'

const Error = () => {
    
    return (
        <div className='relative'>
            <div className='border flex justify-center'>
            <img src={pic404} alt="" className='w-[70vw] h-[100vh]'/>
        </div>
          <span className='absolute top-[5vh] right-[46vw]'><Link to='/'> <button className='bg-[#007456] text-white font-bold px-3 py-2 rounded-lg'>Back to Home</button></Link></span>
        </div>
    );
};

export default Error;