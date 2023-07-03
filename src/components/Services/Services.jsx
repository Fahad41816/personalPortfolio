 
import { FaAngleLeft, FaAngleRight, FaBox, FaTrello } from 'react-icons/fa';

const Services = () => (
    <div className='text-center pt-16'>
        <div data-aos="fade-up">
            <h1 className='text-4xl font-bold'>Services</h1>
            <p className='text-sm  text-slate-400 font-semibold'>What i offer</p>
        </div>  
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3  lg:px-40 ms-14 mt-16'>
        <div data-aos="zoom-in-up">
            <div className='w-52 flex flex-col items-center justify-center shadow-md rounded-md p-10 border'>
                <div className='text-2xl font-bold'><FaTrello></FaTrello></div>
                <h3 className='font-semibold mt-3'>Web Designer</h3>
            </div>
        </div>
            <div data-aos="zoom-in-up">
            <div className='w-52 flex flex-col items-center justify-center shadow-md rounded-md p-10 border'>
                <div className='flex text-2xl font-bold'><FaAngleLeft></FaAngleLeft><FaAngleRight></FaAngleRight></div>
                <h3 className='font-semibold mt-3'>UI/UX Designer</h3>
            </div>
            </div>    
            <div data-aos="zoom-in-up">
            <div className='w-52 flex flex-col items-center justify-center shadow-md rounded-md p-10 border'>
                <div className='text-2xl font-bold'><FaBox></FaBox></div>
                <h3 className='font-semibold mt-3'>Web Developer</h3>
            </div>
            </div>
        </div>
    </div>
);

export default Services;