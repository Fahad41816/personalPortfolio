import React from 'react';
import Image from '../../assets/image/myimage.jpeg' 
import { FaAward , FaShoppingBag, FaHeadset, FaFileAlt} from 'react-icons/fa';
import CV from '../../assets/image/cover letter.pdf'

const About = () => {
    return (
        <section className='text-center pt-10'>
           <div data-aos="fade-up">
                <h1 className='text-4xl font-bold '>About Me</h1>
                <p className='font-semibold text-sm text-slate-500'>My introduction </p>
           </div>
           <div className='lg:p-20 lg:flex items-start justify-center gap-20'>
                {/* image div  */}
                <div data-aos="fade-right">
                <div>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-lg w-52 ' src={Image} alt="" />
                    </div>
                </div>
                </div>

                {/* introduvtion page  */}
                <div data-aos="fade-left">
                <div className='mt-10 lg:mt-0'>
                    <div className='flex gap-5'>
                        <div className='shadow-lg p-2 lg:p-5 rounded-lg border'>
                            <div className='font-bold flex items-center justify-center text-xl'><FaAward></FaAward></div>
                            <h3 className='font-bold '>Experience</h3>
                            <p className='  text-slate-500'>2+ years</p>
                        </div>
                        <div className='shadow-lg p-2 lg:p-5  rounded-lg border'>
                        <div className='font-bold flex items-center justify-center text-xl'><FaShoppingBag></FaShoppingBag></div>
                            <h3 className='font-bold '>Completed</h3>
                            <p className='  text-slate-500'>10+ project</p>
                        </div>
                        <div className='shadow-lg p-2 lg:p-5 rounded-lg border'>
                        <div className='font-bold flex items-center justify-center text-xl'><FaHeadset></FaHeadset></div>
                            <h3 className='font-bold  '>Support</h3>
                            <p className='  text-slate-500'>Online 24/12</p>
                        </div>
                    </div>
                    <div className='lg:w-96 mt-5 text-justify p-2 lg:p-0'>
                        <p className='font-semibold text-slate-500 text-base'>As a full stack web developer I work on both frontend and backend. I can do both web design and web development. I have also done many projects.</p>
                    </div>
                   <div className='text-start mt-10 flex items-center  justify-center lg:justify-start '>
                   <a href={CV} download>
                        <button className='btn bg-black hover:bg-black text-white'>Download cv<FaFileAlt></FaFileAlt></button>
                   </a>
                   </div>

                </div>
                </div>
            </div>
           
        </section>
    );
};

export default About;