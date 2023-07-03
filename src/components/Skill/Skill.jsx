import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Skill = () => {
    return (
        <div className='text-center'>
         <div data-aos="fade-up">
             <h1 className='text-4xl font-bold mt-10'>Skills</h1>
             <p className=' text-slate-500'>My technical level</p>
         </div>
            <div className='lg:flex items-start justify-center gap-10 mt-10'>
                 {/* 1st  div {frontend div } */}
                 <div data-aos="fade-up-right">
                  <div className='text-center rounded-lg lg:w-96 p-10 border shadow'>
                       <h1 className='text-xl font-bold'>Frontend developer</h1>
                       <div className='mt-5 grid grid-cols-2 gap-5'> 
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>HTML</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> Advance </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>CSS</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> Advance </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>Bootstrap</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> Advance </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>tailwind</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> Advance </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>Javascript</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> intermediate </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>React js </p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> intermediate </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>Next js</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> Basic </p>
                            </div>
                       </div>
                  </div>
                  </div>
                  {/* 2nd div {backend div } */}
                  <div data-aos="fade-up-left">
                  <div className='text-center mt-10 lg:mt-0 rounded-lg lg:w-96 p-10 border shadow-md'>
                    <h1 className='text-xl font-bold'>Backend developer</h1>
                    <div className='mt-5  grid grid-cols-2 gap-5'> 
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>Node js </p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> Basic </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>Express js</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> intermediate </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>Mongodb</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> intermediate </p>
                            </div>
                            <div className='text-start'>
                                <div className='flex'><FaCheckCircle className='mt-1 me-1'></FaCheckCircle><p className='font-bold'>firebase</p> </div>
                                <p className='text-sm text-slate-500 ms-2 font-semibold'> intermediate </p>
                            </div>
                             
                       </div>
                  </div>
            </div> 
            </div>
        </div>
    );
};

export default Skill;